/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef2ff",
          100: "#dce6ff",
          200: "#bad0ff",
          300: "#8ab0ff",
          400: "#5a86ff",
          500: "#3060ff",
          600: "#1540ff",
          700: "#0f2edb",
          800: "#0F2044",
          900: "#0a1530",
          950: "#060d1e",
        },
        gold: {
          300: "#e8c96a",
          400: "#d4a83a",
          500: "#C49A2D",
          600: "#a07e22",
          700: "#7c611a",
        },
        steel: {
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["Inter", "Cairo", "system-ui", "sans-serif"],
        display: ['"Plus Jakarta Sans"', "Cairo", "system-ui", "sans-serif"],
        arabic: ["Cairo", "system-ui", "sans-serif"],
      },
      fontSize: {
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
        "10xl": ["10rem", { lineHeight: "1" }],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out both",
        "fade-in": "fadeIn 0.5s ease-out both",
        "slide-in-r": "slideInRight 0.5s ease-out both",
        "slide-in-l": "slideInLeft 0.5s ease-out both",
        "line-grow": "lineGrow 0.8s ease-out both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        lineGrow: {
          "0%": { scaleX: "0", transformOrigin: "left" },
          "100%": { scaleX: "1", transformOrigin: "left" },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /bg-(navy|gold|steel)-(50|100|200|300|400|500|600|700|800|900|950)/,
    },
    {
      pattern:
        /text-(navy|gold|steel)-(50|100|200|300|400|500|600|700|800|900|950)/,
    },
    { pattern: /border-(navy|gold|steel)-(100|200|300|400|500|600|700|800)/ },
  ],
};
