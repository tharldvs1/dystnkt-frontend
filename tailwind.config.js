/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        accent: '#00f3ff',
        highlight: '#ff2a6d',
      }
    },
  },
  plugins: [],
}