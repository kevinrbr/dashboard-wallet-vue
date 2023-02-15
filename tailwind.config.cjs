/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
   "./src/**/*.{js,ts,vue}"
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#fff',
      'black': '#000',
      'primary': '#C4A0FF',
      'neutral': '#1D1C21',
    }
  },
  plugins: [],
}