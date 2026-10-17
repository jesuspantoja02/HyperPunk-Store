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
        // HyperPunk — paleta oscura sobria (sin neón)
        punk: {
          900: "#0c0e12",
          800: "#14171d",
          700: "#1c2129",
          600: "#262d38",
          500: "#3a4556",
          400: "#5a6a80",
          300: "#7a8ba3",
          200: "#a8b4c4",
          100: "#d0d7e0",
          50:  "#eef1f5",
        },
        neon: {
          cyan:    "#7a9bb8",
          purple:  "#8b7ec8",
          pink:    "#b8899a",
          green:   "#6ba88a",
          yellow:  "#c4b07a",
          orange:  "#c4926a",
        },
        dark: {
          950: "#08090c",
          900: "#0c0e12",
          800: "#14171d",
          700: "#1c2129",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "neon-cyan":   "0 2px 12px rgba(0,0,0,0.35)",
        "neon-purple": "0 2px 12px rgba(0,0,0,0.35)",
        "neon-pink":   "0 2px 12px rgba(0,0,0,0.35)",
        "neon-green":  "0 2px 12px rgba(0,0,0,0.35)",
        "card":        "0 4px 20px rgba(0,0,0,0.4)",
        "card-hover":  "0 8px 28px rgba(0,0,0,0.5)",
      },
      backgroundImage: {
        "grid-punk": "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        "gradient-punk": "linear-gradient(135deg, #0c0e12 0%, #1c2129 50%, #0c0e12 100%)",
        "gradient-card": "linear-gradient(135deg, rgba(28,33,41,0.95) 0%, rgba(12,14,18,0.98) 100%)",
        "gradient-neon": "linear-gradient(90deg, #7a9bb8, #8b7ec8, #b8899a)",
      },
      animation: {
        "pulse-neon": "pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scan-line": "scan-line 3s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "slide-in-left": "slide-in-left 0.3s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "fade-in": "fade-in 0.4s ease-out",
      },
      keyframes: {
        "pulse-neon": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "glow": {
          "from": { "text-shadow": "none" },
          "to": { "text-shadow": "none" },
        },
        "slide-in-left": {
          "from": { transform: "translateX(-100%)", opacity: "0" },
          "to": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-right": {
          "from": { transform: "translateX(100%)", opacity: "0" },
          "to": { transform: "translateX(0)", opacity: "1" },
        },
        "fade-in": {
          "from": { opacity: "0", transform: "translateY(8px)" },
          "to": { opacity: "1", transform: "translateY(0)" },
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
