const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      green: colors.green,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      main: {
        background2: '#121212',
        background: '#212121',
        accent: '#0a0a0a',
        accent2: '#008a78',
        font: 'white'
      }
    },
    extend: {},
    fontFamily: {
      sans: ['"Lato"','verdana', 'Graphik', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
