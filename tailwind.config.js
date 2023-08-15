/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors:{
      'custom-yellow': '#FFB814',
      'custom-white' : '#FFFFFF',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',

    },
    backgroundImage: {
      'my': "url('../src/images/logo.png')",
    },
  },
  plugins: [],
}

