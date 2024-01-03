/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        grey: '#a3a8b3',
        blue: '#3565a9',
        light_green: '#d9f9e6',
        dark_green: '#347659',
        light_gray: '#e5e7eb',
        hover_gray: '#f3f4f6',
      },
    },
  },
  plugins: [],
};
