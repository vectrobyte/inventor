/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        spacing: 'height, width, margin, padding',
      },
    },
  },
  plugins: [],
};
