import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#0891b2", dark: "#0e7490", light: "#cffafe" },
      },
    },
  },
  plugins: [],
};
export default config;
