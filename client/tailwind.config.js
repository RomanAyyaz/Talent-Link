/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgNavbar:'#202E3B',
        bgMenu:'#134B70',
        MobilePhoneNavbg:"#1F2024"
      }
    },
  },
  plugins: [],
}