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
    },
    fontFamily: {
      'sans': ['Satoshi-Regular', 'Helvetica', 'Arial', 'sans-serif'],
      'heading': ['ClashDisplay-Bold', 'Helvetica', 'Arial', 'sans-serif'],
    }
  },
  plugins: [],
}