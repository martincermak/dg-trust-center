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
        // Delta Green brand tokens — adjust once exact hex confirmed
        dg: {
          dark:    "#0A1F12",   // hero bg, nav bg
          mid:     "#14532D",   // section accents, icon bg
          green:   "#16A34A",   // primary accent
          bright:  "#22C55E",   // CTA buttons, highlights
          surface: "#F0FDF4",   // light section bg
          muted:   "#DCFCE7",   // badge / chip bg
          border:  "#BBF7D0",   // dividers on light bg
          text:    "#052E16",   // body text on light
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
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
