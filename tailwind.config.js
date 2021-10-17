module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './lib/components/**/*.{js,ts,jsx,tsx}',
    './lib/features/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' | 'class'
  theme: {
    extend: {
      colors: {
        electric: '#db00ff',
        ribbon: '#0047ff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
