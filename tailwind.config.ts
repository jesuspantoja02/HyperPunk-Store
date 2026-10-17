import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Escala neutra oscura — sin neón
        punk: {
          900: "#0f1115",
          800: "#161a20",
          700: "#1e232b",
          600: "#2a313c",
          500: "#3d4654",
          400: "#6b7380",
          300: "#9aa3b0",
          200: "#c5cad3",
          100: "#e4e7ec",
          50:  "#f4f5f7",
        },
        // Alias legacy: todos matizados a gris (nada llamativo)
        neon: {
          cyan:    "#9aa3b0",
          purple:  "#8b919c",
          pink:    "#9a9096",
          green:   "#8a9690",
          yellow:  "#a39a88",
          orange:  "#a09080",
        },
        dark: {
          950: "#0a0b0e",
          900: "#0f1115",
          800: "#161a20",
          700: "#1e232b",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "neon-cyan":   "none",
        "neon-purple": "none",
        "neon-pink":   "none",
        "neon-green":  "none",
        "card":        "0 1px 3px rgba(0,0,0,0.35)",
        "card-hover":  "0 4px 16px rgba(0,0,0,0.4)",
      },
      backgroundImage: {
        "grid-punk": "none",
        "gradient-punk": "none",
        "gradient-card": "none",
        "gradient-neon": "none",
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
