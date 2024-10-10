/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/primeng/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e8f5ff",
          100: "#d5edff",
          200: "#b4dcff",
          300: "#87c1ff",
          400: "#5899ff",
          500: "#3270ff",
          600: "#1043ff",
          700: "#0335fc",
          800: "#0933ca",
          900: "#12339d",
          950: "#0b1c5b",
        },
      },
    },
  },
  plugins: [],
};
