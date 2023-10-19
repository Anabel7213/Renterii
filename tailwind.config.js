/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        "cutive": "Cutive Mono",
        "source": "Source Code Pro",
        "st": "Staatliches",
        "kenya": "Kenyan Coffee Rg"
      }
    },
    screens: {
      "sm": "324px",
      "md": "1024px"
    },
    variants: {
      extend: {
        textColor: ["group-hover"]
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}