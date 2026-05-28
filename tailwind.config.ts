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
        cream: "#FAF9F6",
        "cream-dark": "#F0EDE6",
        ink: "#111111",
        "ink-muted": "#555555",
        "ink-light": "#888888",
        // Pink accent system
        accent: "#FF4FD8",
        "accent-light": "#FFB3EF",
        "accent-dark": "#D93CBE",
        "accent-glow": "rgba(255, 79, 216, 0.18)",
        "accent-glow-sm": "rgba(255, 79, 216, 0.10)",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        accent: ["var(--font-syne)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(4rem, 10vw, 9rem)", { lineHeight: "0.92" }],
        "display-xl": ["clamp(2.5rem, 6vw, 5.5rem)", { lineHeight: "1.0" }],
        "display-lg": ["clamp(2rem, 4.5vw, 4rem)", { lineHeight: "1.05" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.1" }],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        widest: "0.2em",
        "ultra-wide": "0.35em",
      },
      boxShadow: {
        "glow-sm": "0 0 20px rgba(255, 79, 216, 0.12)",
        "glow-md": "0 0 40px rgba(255, 79, 216, 0.18)",
        "glow-lg": "0 0 80px rgba(255, 79, 216, 0.22)",
        "lift-sm": "0 8px 32px rgba(17, 17, 17, 0.08)",
        "lift-md": "0 16px 48px rgba(17, 17, 17, 0.12)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        shimmer: "shimmer 2.5s infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 4s ease-in-out infinite",
        "bounce-gentle": "bounceGentle 2s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "text-shimmer": "textShimmer 3s linear infinite",
        marquee: "marquee 22s linear infinite",
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
          "0%, 100%": { boxShadow: "0 0 8px rgba(255,79,216,0.4)", opacity: "0.6" },
          "50%": { boxShadow: "0 0 22px rgba(255,79,216,0.85)", opacity: "1" },
        },
        textShimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      backgroundImage: {
        "accent-gradient":
          "linear-gradient(135deg, #FF4FD8 0%, #D93CBE 100%)",
        "accent-gradient-soft":
          "linear-gradient(135deg, rgba(255,79,216,0.12) 0%, rgba(217,60,190,0.06) 100%)",
        "hero-glow":
          "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(255,79,216,0.06) 0%, transparent 70%)",
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
