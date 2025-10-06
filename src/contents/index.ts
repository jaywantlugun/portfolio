import { deepMerge } from "../utils/deepMerge";
import type { AppContent } from "./AppContent";
import { Language } from "../types/Language";

const memoryCache: Record<string, any> = {};

// Generic type for a module with default export
type Module<T> = { default: T };

// Prepare maps of modules (Vite will split them into chunks automatically)
const baseModules = import.meta.glob<Module<any>>("./_base/*.ts");
const langModules = import.meta.glob<Module<any>>("./*/**/*.ts");

export async function resolveContent<K extends keyof AppContent>(
  pageKey: K,
  language: Language,
): Promise<AppContent[K]> {
  const cacheKey = `${language}-${String(pageKey)}`;

  // 1. Check memory cache
  if (memoryCache[cacheKey]) return memoryCache[cacheKey];

  // 2. Check localStorage
  const stored = localStorage.getItem(cacheKey);
  if (stored) {
    const parsed = JSON.parse(stored);
    memoryCache[cacheKey] = parsed;
    // refresh in background
    fetchFreshContent(pageKey, language, cacheKey);
    return parsed;
  }

  // 3. Fresh load
  return await fetchFreshContent(pageKey, language, cacheKey);
}

async function fetchFreshContent<K extends keyof AppContent>(
  pageKey: K,
  language: Language,
  cacheKey: string,
): Promise<AppContent[K]> {
  // dynamic import for base content
  const baseImporter = baseModules[`./_base/${pageKey}.ts`];
  if (!baseImporter) throw new Error(`No base content for ${pageKey}`);

  const baseModule = (await baseImporter()) as Module<AppContent[K]>;
  let merged = baseModule.default;

  // dynamic import for language override
  const langImporter = langModules[`./${language}/${pageKey}.ts`];
  if (langImporter) {
    const langModule = (await langImporter()) as Module<Partial<AppContent[K]>>;
    merged = deepMerge(merged, langModule.default);
  }

  memoryCache[cacheKey] = merged;
  localStorage.setItem(cacheKey, JSON.stringify(merged));

  return merged;
}
