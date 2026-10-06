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
        // ── Brand v4 "Chrome Aura" — OFFICIAL palette (Oct 2026) ──
        onyx: "#250209",
        mahogany: "#250209",
        "mahogany-deep": "#1A0714",
        "mahogany-rich": "#3A0E1E",
        charcoal: "#3A0E1E",
        plum: "#24081A",
        "plum-deep": "#1A0714",

        snow: "#FFF3F2",
        ivory: "#FFF3F2",
        paper: "#FCFCFA",
        petal: "#FFCAE4",
        "petal-soft": "#FBD9EC",
        blush: "#FBD9EC",

        berry: "#BA006D",
        "berry-deep": "#89235B",
        raspberry: "#89235B",
        "raspberry-light": "#D12E86",
        magenta: "#BA006D",
        "pink-chrome": "#E05A9F",
        "lilac-chrome": "#C8B9FF",

        "icy-blue": "#D9EAFE",
        "chrome-gray": "#B9B9B7",
        "chrome-mid": "#B9B9B7",

        ink: "#250209",
        "ink-muted": "#555555",
        "ink-light": "#888888",

        // Legacy aliases
        cream: "#FFF3F2",
        "cream-dark": "#FBD9EC",
        accent: "#BA006D",
        "accent-light": "#E05A9F",
        "accent-dark": "#89235B",
      },
      fontFamily: {
        display: ["var(--font-instrument)", "system-ui", "sans-serif"],
        sans: ["var(--font-instrument)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
        accent: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-2xl": ["clamp(4rem, 10vw, 10rem)", { lineHeight: "0.88" }],
        "display-xl": ["clamp(2.75rem, 7vw, 7rem)", { lineHeight: "0.92" }],
        "display-lg": ["clamp(2rem, 5vw, 5rem)", { lineHeight: "1.0" }],
        "display-md": ["clamp(1.5rem, 3.5vw, 3rem)", { lineHeight: "1.1" }],
      },
      letterSpacing: {
        tightest: "-0.05em",
        tighter: "-0.03em",
        widest: "0.22em",
        "ultra-wide": "0.32em",
      },
      boxShadow: {
        "glow-sm": "0 0 20px rgba(186, 0, 109, 0.18)",
        "glow-md": "0 0 40px rgba(186, 0, 109, 0.26)",
        "glow-lg": "0 0 80px rgba(186, 0, 109, 0.32)",
        "glow-berry": "0 8px 48px rgba(186, 0, 109, 0.45)",
        "glass": "0 20px 60px -20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,243,242,0.08)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        shimmer: "shimmer 2.5s infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 4s ease-in-out infinite",
        "bounce-gentle": "bounceGentle 2s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        marquee: "marquee 22s linear infinite",
        "spark-pulse": "sparkPulse 2.4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.5" },
          "50%": { transform: "translateY(7px)", opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 8px rgba(186,0,109,0.4)", opacity: "0.6" },
          "50%": { boxShadow: "0 0 22px rgba(186,0,109,0.9)", opacity: "1" },
        },
        sparkPulse: {
          "0%, 100%": { opacity: "0.75", transform: "scale(1) rotate(0deg)" },
          "50%": { opacity: "1", transform: "scale(1.15) rotate(12deg)" },
        },
      },
      backgroundImage: {
        "berry-gradient": "linear-gradient(135deg, #BA006D 0%, #89235B 100%)",
        "berry-gradient-soft":
          "linear-gradient(135deg, rgba(186,0,109,0.18) 0%, rgba(137,35,91,0.06) 100%)",
        "sweep-bg": "url('/brand/v4/bg-primary-sweeps.png')",
        "silk-bg": "url('/brand/v4/bg-burgundy-silk.png')",
        "ribbon-bg": "url('/brand/v4/bg-burgundy-ribbon.png')",
        "pearl-bg": "url('/brand/v4/bg-pearl-silk.png')",
        "chrome-sculpture": "url('/brand/v4/bg-chrome-sculpture.png')",
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
        "circ-out": "cubic-bezier(0, 0.55, 0.45, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
