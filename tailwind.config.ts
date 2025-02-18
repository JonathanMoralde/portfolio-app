import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "28%": "28%",
        "22%": "22%",
      },
      height: {
        "sm-hero": "30.625rem",
        "lg-hero": "80vh",
      },
      colors: {
        "olive-green": "#8DAD93",
      },
      backgroundColor: {
        "hero-bg": "#181B1A",
        "olive-green": "#8DAD93",
      },
      backgroundImage: {
        "hero-pattern-dark": "url('/dark-hero-bg.png')",
        "hero-pattern-light": "url('/light-hero-bg.png')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  darkMode: "class",
};
export default config;
