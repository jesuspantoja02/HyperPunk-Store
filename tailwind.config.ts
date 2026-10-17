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
        // Inspirado en MM Store, afinado
        mm: {
          blue: "#1f85ff",
          "blue-hover": "#1565d8",
          "blue-soft": "rgba(31, 133, 255, 0.08)",
          black: "#0d0d0d",
          white: "#ffffff",
          surface: "#f7f8fa",
          border: "#e3e3e3",
          muted: "#8a9297",
          text: "#1a1a1a",
          "text-soft": "#5c636a",
          sale: "#e21414",
          star: "#e6a800",
          success: "#008a00",
        },
        // Alias legacy → mapeados a la nueva paleta
        punk: {
          900: "#0d0d0d",
          800: "#1a1a1a",
          700: "#2a2a2a",
          600: "#3d3d3d",
          500: "#5c636a",
          400: "#8a9297",
          300: "#b0b0b0",
          200: "#d6d6d6",
          100: "#f0f0f0",
          50:  "#f7f8fa",
        },
        neon: {
          cyan:    "#1f85ff",
          purple:  "#1f85ff",
          pink:    "#e21414",
          green:   "#008a00",
          yellow:  "#e6a800",
          orange:  "#e21414",
        },
        dark: {
          950: "#0a0a0a",
          900: "#0d0d0d",
          800: "#1a1a1a",
          700: "#2a2a2a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "monospace"],
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "neon-cyan":   "none",
        "neon-purple": "none",
        "neon-pink":   "none",
        "neon-green":  "none",
        "card":        "0 1px 3px rgba(0,0,0,0.06)",
        "card-hover":  "0 4px 16px rgba(0,0,0,0.08)",
      },
      backgroundImage: {
        "grid-punk": "none",
        "gradient-punk": "none",
        "gradient-card": "none",
        "gradient-neon": "none",
      },
      animation: {
        "fade-in": "fade-in 0.25s ease-out",
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
