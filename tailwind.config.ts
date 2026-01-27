import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Disable automatic dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-space)'],
      },
      colors: {
        zen: {
          bg: '#FAFAF9', // Stone 50
          paper: '#F5F5F4', // Stone 100
          surface: '#E7E5E4', // Stone 200
          text: '#44403C', // Stone 700
          subtext: '#78716C', // Stone 500
          accent: '#57534E', // Stone 600
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
