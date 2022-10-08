/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-dark":"#05ff9b",
        primary : "#53BD94",
        secondary : "#53BD9498",
        facebook : "#4267B2",
        linkedin : "#1DA1F2",
        twitter : "#1DA1F2"
      }
    },
  },
  plugins: [],
};
