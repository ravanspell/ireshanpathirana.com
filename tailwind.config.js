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
        'custom-eerie-black-2': 'var(--eerie-black-2)',
        'custom-jet': 'var(--jet)',
      },
      boxShadow: {
        'custom-shadow-1': 'var(--shadow-1)',
      },
    },
  },
  plugins: [],
}