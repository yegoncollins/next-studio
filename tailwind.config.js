/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'neutralSilver': '#F5F7FA',
        'neutralDGrey': '#4D4D4D',
        'brandPrimary': '#FF3F56',
        'neutralGrey': '#717171',
        'gray900': '#18191f',
        
      }
    },
  },
  plugins: [require('flowbite/plugin'),],
}

