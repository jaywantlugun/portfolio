export function deepMerge<T>(base: T, override: Partial<T>): T {
  const result: any = { ...base };

  for (const key in override) {
    if (!Object.prototype.hasOwnProperty.call(override, key)) continue;

    const baseValue = (base as any)[key];
    const overrideValue = (override as any)[key];

    if (
      baseValue &&
      overrideValue &&
      typeof baseValue === "object" &&
      typeof overrideValue === "object" &&
      !Array.isArray(baseValue)
    ) {
      // Safe recursive merge
      result[key] = deepMerge(baseValue, overrideValue);
    } else if (overrideValue !== undefined) {
      result[key] = overrideValue;
    }
  }

  return result;
}
