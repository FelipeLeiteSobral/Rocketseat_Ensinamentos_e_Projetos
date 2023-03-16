/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "DarkBlue":"#1E6F9F",
        "LightBlue":"#008099",
        "Blue":"#4EA8DE",
        "Purple":"#8284FA",
      }
    },
  },
  plugins: [],
}