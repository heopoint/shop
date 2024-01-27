/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#333',
      },
      maxWidth: {
        '1260': '1260px',
      },
    },
  },
  plugins: [],
};
