/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    listStyleType: {
      roman: 'upper-roman',
      alpha: 'upper-alpha',
    }
  },
  plugins: [
    // ...
    require('@tailwindcss/typography'),
  ],
}