module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' | 'class'
  theme: {
    extend: {
      colors: {
        body: '#e4e7eb',
        'body-dark': '#374151',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
