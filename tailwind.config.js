/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "agoda-blue": {
          light: "#87B3FB",
          DEFAULT: "#5392F9",
        },
        "agoda-fuchsia": {
          light: "#F76385",
          DEFAULT: "#FF567D",
        }
      }
    },
  },
  plugins: [],
};
