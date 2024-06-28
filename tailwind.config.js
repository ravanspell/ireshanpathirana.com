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
        'light-gray': 'var(--light-gray)'
      },
      boxShadow: {
        'shadow-1': 'var(--shadow-1)',
        'shadow-2': 'var(--shadow-2)',
        'shadow-3': 'var(--shadow-3)',
      },
    },
  },
  plugins: [],
}