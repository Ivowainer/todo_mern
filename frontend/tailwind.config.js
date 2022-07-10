/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src//pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'default': '#00BF95',
      },
      boxShadow: {
        'card': 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      }
    }
  },
  plugins: [],
}
