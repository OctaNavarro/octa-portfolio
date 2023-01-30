/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      signature: ['Satisfy'],
    },
    colors: {
      lbgray: '#ECECEC',
      lblue: '#219EBC',
      blue: '#023047',
      dblue: '#010F16',
      yellow: '#FFB703',
      orange: '#FD9E02',
      tangerine: '#FB8500',
      black: '#000000',
      white: '#FFFFFF',
    },
  },
  plugins: [],
}
