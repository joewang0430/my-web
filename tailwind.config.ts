import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'encode-sans-sc': ['var(--encode-sans-sc)', 'sans-serif'], // Add the font family
        'exo-2': ['var(--exo-2)', 'sans-serif'], 
        'funnel-display': ['var(--funnel-display)', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "wz-main-color": "var(--wz-main-color)",
        "wz-text-color": "var(--wz-text-color)",
        "wz-bg-color": "var(--wz-bg-color)",
        "wz-classic-blue": "var(--wz-classic-blue)",
        "wz-secondary-blue": "var(--wz-secondary-blue)",
        "wz-light-gray": "var(--wz-light-gray)",
        "wz-text-black": "var(--wz-text-black)", 
        "wz-classic-black": "var(--wz-classic-black)",
        "wz-classic-white": "var(--wz-classic-white)",
        "wz-classic-green": "var(--wz-classic-green)",
        "wz-secondary-green": "var(--wz-secondary-green)",
      },
    },
  },
  plugins: [],
} satisfies Config;
