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
        bgSignin:'#F5F5F5',
        MobilePhoneNavbg:"#1F2024",
        HeroButtonOne:'#E03B11',
        bgFooter:"#EFF1F2",
        facebook:'	#1877F2',
        twitter:'#1DA1F2',
        instagram:'#FCAF45',
        youtube:'	#FF0000',
        bgotherLink:"#F7F9F9",
        bgSkills:"#F9F9F9",
        bgwhite:'#FFFFFF',
        bgInstSidebar:"#EEEEEF",
        InstructorPrimary:'#6A73FA',
        bgsidebarInst:'#EEEEF0',
        buttonHover:'#3945F8'
      }
    },
  },
  plugins: [],
}