import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#031427",
        panel: "#0b1c30",
        card: "#102034",
        cardHi: "#1b2b3f",
        line: "#26364a",
        text: "#d3e4fe",
        muted: "#9eacc2",
        electric: "#2d5bff",
        violet: "#d0bcff",
        mint: "#4edea3",
        amber: "#f7c948",
        danger: "#ff7a70",
      },
      fontFamily: {
        sans: ["Geist", "system-ui", "sans-serif"],
        display: ["Sora", "Geist", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(184,195,255,.18), 0 20px 50px rgba(0,0,0,.28)",
      },
    },
  },
  plugins: [],
} satisfies Config;
