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
      },
      height: {
        "sm-hero": "30.625rem",
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
      },
    },
  },
  plugins: [],
};
export default config;
