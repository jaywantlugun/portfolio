import { useTheme } from "../../hooks/useTheme";

export default function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      aria-label="Toggle Dark Mode"
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:opacity-80 transition"
    >
      {isDarkMode ? "🌙" : "☀️"}
    </button>
  );
}
