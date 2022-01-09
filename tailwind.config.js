module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      screens: {
        'xs': '320px'
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
