import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#345789',
          dark: '#0f1419',
        },
        orange: {
          DEFAULT: '#FC8F4C',
          light: '#ff8c61',
          dark: '#e55a2b',
        },
        tan: {
          DEFAULT: '#d4b896',
          light: '#e5d4bc',
          dark: '#c4a886',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;