/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        'gradient-onyx': 'var(--bg-gradient-onyx)',
        'orange-yellow-crayola': 'var(--orange-yellow-crayola)',
      }
    },
  },
  plugins: [],
}