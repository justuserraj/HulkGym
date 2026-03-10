import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#2A2A2A",
        input: "#2A2A2A",
        ring: "#FF6A00",
        background: "#0E0E0E",
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#FF6A00",
          foreground: "#FFFFFF",
          hover: "#FF7F1F",
          dark: "#E65C00",
        },
        secondary: {
          DEFAULT: "#141414",
          foreground: "#B3B3B3",
        },
        card: {
          DEFAULT: "#1B1B1B",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#111111",
          foreground: "#7A7A7A",
        },
      },
      borderRadius: {
        lg: "14px",
        md: "10px",
        sm: "6px",
      },
      fontFamily: {
        heading: ["Oswald", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;