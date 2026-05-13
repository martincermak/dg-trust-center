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
        // Delta Green brand tokens — extracted from deltagreen.energy screenshots
        dg: {
          dark:    "#0B1D0E",   // hero/nav bg — very dark forest green
          darker:  "#091508",   // deeper variant for hover/active states
          lime:    "#72EC41",   // electric lime — headlines, CTA fill, logo "green"
          limehov: "#5ED42E",   // lime hover (slightly darker)
          surface: "#F4FAF5",   // light section bg — very slight green tint
          muted:   "#E6F7E9",   // badge/chip bg on light
          border:  "#C6E8CB",   // dividers on light bg
          text:    "#0B1D0E",   // body text on light sections
          subtle:  "#4A6B4E",   // secondary text on dark bg
        },
      },
      fontFamily: {
        // Manrope matches the geometric bold weight seen on deltagreen.energy headlines
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
