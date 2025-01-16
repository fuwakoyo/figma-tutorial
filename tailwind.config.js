/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
    
],
  theme: {
    extend: {
      colors:{
        'custom-gray':'#49454F'
      }
    },
  },
  corePlugins: {
    preflight: false, // 必要に応じてpreflightを無効化
  },
  plugins: [],
}