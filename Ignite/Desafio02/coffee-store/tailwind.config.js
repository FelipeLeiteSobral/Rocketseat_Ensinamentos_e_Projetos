/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    data: {
      checked: 'ui~="checked"',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      baloo: ['Baloo 2', 'cursive'],
    },
    extend: {
      colors: {
        "yellow":"#DBAC2C",
        "yellow-dark":"#C47F17",
        "yellow-light":"#F1E9C9",
  
        "purple":"#8047F8",
        "purple-dark":"#4B2995",
        "purple-light":"#EBE5F9",
  
        "base-title":"#272221",
        "base-subtitle":"#403937",
        "base-text":"#574F4D",
        "base-label":"#8D8686",
        
        "base-hover":"#D7D5D5",
        "base-button":"#E6E5E5",
        "base-input":"#EDEDED",
        "base-card":"#F3F2F2",
        
        "background":"#FAFAFA",
        "white":"#FFFFFF",
      },
    },
  },
  plugins: [],
}