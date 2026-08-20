/*--====-- Tailwind Configuration --====--*/
import type { Config } from "tailwindcss";

const config: Config = {
  /*--====-- Content Paths --====--*/
  // CORRECTED PATHS: The project structure is no longer inside ./src
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./services/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  /*--====-- Theme Configuration --====--*/
  theme: {
    fontFamily: {
      sans: ["var(--font-outfit)", "sans-serif"],
    },
    extend: {
      /*--====-- Colors --====--*/
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        acDark: "var(--acDark)",
        acGraylight: "var(--acGraylight)",
        aclight2: "var(--aclight2)",
        acGraylight2: "var(--acGraylight2)",
        acDarkGray: "var(--acDarkGray)",
        acOp01: "var(--acOp01)",
        acWD: "var(--acWD)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        "input-background": "var(--input-background)",
        "switch-background": "var(--switch-background)",
        ring: "var(--ring)",
        "theme-start": "var(--theme-start)",
        "theme-end": "var(--theme-end)",
      },
      borderRadius: {
        sm: "calc(var(--radius) - 4px)",
        DEFAULT: "calc(var(--radius) - 2px)",
        md: "calc(var(--radius) - 2px)",
        lg: "var(--radius)",
        xl: "calc(var(--radius) + 4px)",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  /*--====-- Plugins --====--*/
  plugins: [],
};

export default config;
