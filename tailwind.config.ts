import type { Config } from "tailwindcss";

const c = (v: string) => `rgb(var(--${v}) / <alpha-value>)`;

export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: c("cream"), sand: c("sand"), sandsoft: c("sandsoft"), card: c("card"), navy: c("navy"),
        body: c("body"), muted: c("muted"), line: c("line"), green: c("green"), greensoft: c("greensoft"),
        band: c("band"), onband: c("onband"),
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "Times New Roman", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
