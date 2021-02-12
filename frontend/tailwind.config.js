module.exports = {
  purge: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Poppins'],
      'serif': ['serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
