/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'death-star': "url('./src/assets/death-star-background.jpg')",
      },
      colors: {
        'star-wars': "#FFC500"
      }
    },
  },
  plugins: [],
}
