import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Experien theme (from Figma)
        ink: "#123C35",
        lime: "#D8F36A",
        paper: "#FBFCFA",
        line: "#DBE0D9",
        muted: "#5C6F69", // estimated, replace with the Figma grey text colour
        // keeps older components working
        brand: { DEFAULT: "#123C35", dark: "#0C2A25", light: "#D8F36A" },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
