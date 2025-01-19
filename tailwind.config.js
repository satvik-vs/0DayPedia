/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'float-1': 'float-1 6s ease-in-out infinite',
        'float-2': 'float-2 7s ease-in-out infinite',
        'float-3': 'float-3 8s ease-in-out infinite',
        'float-4': 'float-4 9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};