import { useLanguage } from "../../hooks/useLanguage";
import { Language } from "../../types/Language";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === Language.ENGLISH ? Language.HINDI : Language.ENGLISH);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="w-27 px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-slate-900 dark:text-white border border-gray-400 dark:border-gray-600 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
    >
      🌐 {language === Language.ENGLISH ? "हिंदी" : "English"}
    </button>
  );
}
