/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#604693",
        secondary:"#523455",
        danger:"#990000",
        success:"#127833",
        light: {
          primary: "#3490dc",
          secondary: "#6c757d",
          danger: "#e3342f",
          success: "#38c172"
        },
        dark: {
          primary: "#8b5cf6",
          secondary: "#6b7280",
          danger: "#ef4444",
          success: "#22c55e"
        }
      },
      
    },
  },
  
  plugins: [],
}