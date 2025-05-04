/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          400: '#FFD700', // Özel sarı renk
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Dark mode desteği
} 