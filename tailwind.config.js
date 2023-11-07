/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        imperial: '#E63946',
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'cursive'],
        inter: ['Inter, sans-serif'],
      },
    },
  },
  plugins: [],
}
