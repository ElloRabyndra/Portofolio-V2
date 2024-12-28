/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode : "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
    extend: {
      colors: {
        main: "#10b981",
        secondary: "#334155",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 1.2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
