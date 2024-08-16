/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/components/**/*.{js,jsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        categories: 'repeat(4, min(200px))',
      },
      height: {
        22.5: '90px',
      },
    },
  },
  plugins: [],
};
