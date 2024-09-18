import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: "var(--font-ptSerif)",
      secondary: "var(--font-sourceSans3)",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#323232",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
      letterSpacing: {
        "extra-wide": "0.15em", // Add custom spacing
      },
    },
  },
  plugins: [],
};
export default config;
