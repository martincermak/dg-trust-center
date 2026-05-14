import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dg: {
          dark:    "#0B1D0E",
          darker:  "#091508",
          lime:    "#72EC41",
          limehov: "#5ED42E",
          surface: "#F4FAF5",
          muted:   "#E6F7E9",
          border:  "#C6E8CB",
          text:    "#0B1D0E",
          subtle:  "#4A6B4E",
        },
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Menlo", "monospace"],
      },
      maxWidth: {
        content: "1120px",
      },
    },
  },
  plugins: [],
};

export default config;
