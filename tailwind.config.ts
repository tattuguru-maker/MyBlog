import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Core palette */
        bg: {
          primary: "#0a0a0f",
          secondary: "#12121a",
          tertiary: "#1a1a2e",
          elevated: "#222236",
        },
        accent: {
          primary: "#6c5ce7",
          secondary: "#a29bfe",
          tertiary: "#fd79a8",
          glow: "#6c5ce7",
        },
        text: {
          primary: "#f0f0f5",
          secondary: "#a0a0b8",
          muted: "#6b6b80",
        },
        glass: {
          border: "rgba(255, 255, 255, 0.08)",
          bg: "rgba(255, 255, 255, 0.04)",
          hover: "rgba(255, 255, 255, 0.08)",
        },
        success: "#00b894",
        warning: "#fdcb6e",
        danger: "#e17055",
        info: "#74b9ff",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-sm": ["2rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh": "linear-gradient(135deg, #6c5ce720 0%, transparent 50%, #fd79a820 100%)",
        "gradient-glass": "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        "hero-gradient": "radial-gradient(ellipse at 50% 0%, #6c5ce730 0%, transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(108, 92, 231, 0.3)",
        "glow-lg": "0 0 40px rgba(108, 92, 231, 0.4)",
        "glow-accent": "0 0 20px rgba(253, 121, 168, 0.3)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.3)",
        "glass-lg": "0 16px 48px rgba(0, 0, 0, 0.4)",
        neo: "8px 8px 16px #08080d, -8px -8px 16px #1c1c2f",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "shimmer": "shimmer 2s infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(108, 92, 231, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(108, 92, 231, 0.6)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
