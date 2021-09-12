module.exports = {
  mode: 'jit',
  purge: {
    content: [
    './**/*.php',
    './**/*.js',
    ],
    options: {
      skippedContentGlobs: ['./node_modules/**', './public/**', './kirby/**', './vendor/**']
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
