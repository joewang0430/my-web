import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
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
