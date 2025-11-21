/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#c1121f',
          slate: '#0f172a',
          silver: '#c0c0c0',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
}
