/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0D0E",
        foreground: "#E8EAE9",
        lime: {
          DEFAULT: "#D4F56C",
          hover: "#C3E558",
          muted: "rgba(212, 245, 108, 0.12)",
        },
        card: {
          DEFAULT: "#131618",
          foreground: "#E8EAE9",
          border: "rgba(255, 255, 255, 0.08)",
          hover: "#181C1E",
        },
        muted: {
          DEFAULT: "#8A9094",
          foreground: "#6A7074",
        },
      },
      fontFamily: {
        sans: ['"Noto Sans KR"', 'sans-serif'],
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "pulse-slow": "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
