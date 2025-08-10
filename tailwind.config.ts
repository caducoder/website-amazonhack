import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        50: "#f0f9f4",
        100: "#dcf4e6",
        200: "#bbe8d0",
        300: "#8dd5b1",
        400: "#59bd8a",
        500: "#107d44", // rgb(16, 125, 68)
        600: "#0d6538",
        700: "#0b512d",
        800: "#094025",
        900: "#07351f",
      },
      mainGreen: "#107D44",
      lightGreen: "#6fbf73",
      darkGreen: "#21874d",
      silver: "#C4C5C0",
      darkgrey: "#595a55",
      darkbrown: "#110809",
      white: "#FFFFFF",
      goldenroad: "#BC873E",
      "light-goldenroad": "#C6AE80",
      "dark-goldenroad": "#B87333",
      red: "#d32f2f",
    },
  },
  plugins: [],
};

export default config;
