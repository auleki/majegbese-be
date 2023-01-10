/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          100: '',
          200: '',
          300: '',
          400: ''
        },
        purple: {
          100: "#C8C7FF"
        },
        gray: {
          100: "#F8F8F8",
          200: "#C4C4C4",
          400: "#6B6B6B",
        }
      }
    },
  },
  plugins: [],
}