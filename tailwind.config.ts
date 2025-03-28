import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
      fontFamily: {
        sans: ['var(--font-montserrat)'],
        montserrat: ['var(--font-montserrat)'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Enhanced premium colors with metallic rose gold variations
        premium: {
          gold: "#CD8A4F", // Base copper/bronze gold
          warm: "#D4966A", // Warmer rose gold with orange undertones
          deep: "#C87F65", // Deeper rose gold with pink undertones
          light: "#E5A186", // Lighter, champagne-tinted rose gold
          navy: "#0D1A2F", // Premium dark navy blue
          navy_light: "#152642", // Lighter variation of navy for gradients
          navy_deep: "#08121F", // Deeper variation of navy for shadows
        },
        primary: {
          DEFAULT: "#CD8A4F", // Base copper/bronze gold
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-scale": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fadeIn": "fade-in 0.8s ease-out forwards",
        "fadeInSlowA": "fade-in 1.2s ease-out 0.3s forwards",
        "fadeInSlowB": "fade-in 1.2s ease-out 0.6s forwards",
        "fadeInUp": "fade-in-up 0.8s ease-out 0.4s forwards",
        "fadeInScale": "fade-in-scale 0.6s ease-out 0.3s forwards",
        "fadeInScaleDelay1": "fade-in-scale 0.6s ease-out 0.5s forwards",
        "fadeInScaleDelay2": "fade-in-scale 0.6s ease-out 0.7s forwards",
        "shimmer": "shimmer 3s infinite linear",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
