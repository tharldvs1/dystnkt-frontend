/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dystnkt-black': '#000000',
        'dystnkt-cyan': '#00f3ff',
        'dystnkt-pink': '#ff2a6d',
      }
    },
  },
  plugins: [],
}