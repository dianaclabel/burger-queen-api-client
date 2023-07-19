/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        queen: {
          dark: "#1fa094",
          DEFAULT: "#bfa094",
          light: "#8fa094",
        },
        queso: "orange",
      },
      fontFamily: {
        inter: "Inter, Arial, sans-serif",
      },
    },
  },
  plugins: [],
};
