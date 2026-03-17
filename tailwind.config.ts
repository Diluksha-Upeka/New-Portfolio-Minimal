import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Disable automatic dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-space)"],
      },
      colors: {
        zen: {
          bg: "var(--zen-bg)",
          paper: "var(--zen-paper)",
          surface: "var(--zen-surface)",
          text: "var(--zen-text)",
          subtext: "var(--zen-subtext)",
          accent: "var(--zen-accent)",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
