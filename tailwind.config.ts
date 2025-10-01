import type { Config } from "tailwindcss";

const config: Config = {
  // Make sure Tailwind scans all React/TSX files inside src
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
