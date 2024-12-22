/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
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
    },
  },
  plugins: [],
};
