/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#7c3aed',
        secondary: '#64748b',
        dark: '#111827',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
