import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F1A",
        primary: "#63F5FF",   // neon cyan
        secondary: "#B95CFF", // neon violet
        accent: "#F5D061",    // sun-gold
        earth: "#58A055",     // grounded green
        ink: {
          DEFAULT: "#E6EEF7",
          dim: "#A5B1C2"
        }
      },
      boxShadow: {
        glow: "0 0 24px 2px rgba(99,245,255,0.25)",
        "glow-violet": "0 0 24px 2px rgba(185,92,255,0.25)",
        "glow-gold": "0 0 24px 2px rgba(245,208,97,0.25)"
      },
      backgroundImage: {
        grain: "radial-gradient(1200px 600px at 50% 0%, rgba(99,245,255,0.06), transparent 60%), radial-gradient(1200px 600px at 50% 100%, rgba(185,92,255,0.06), transparent 60%)"
      },
      borderRadius: {
        xl2: "1.25rem"
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-4px)" } },
        pulseSoft: { "0%,100%": { opacity: 0.35 }, "50%": { opacity: 0.6 } }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseSoft: "pulseSoft 5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
