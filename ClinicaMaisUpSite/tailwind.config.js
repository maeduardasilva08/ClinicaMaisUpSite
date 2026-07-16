/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dourado: {
          50: '#FBF8EE',
          100: '#F5EED3',
          200: '#EBDC9F',
          300: '#E0C96B',
          400: '#D4B547',
          500: '#C9A227',
          600: '#A4801D',
          700: '#7B621A',
          800: '#5C4A16',
          900: '#3D3110',
        },
        areia: {
          50: '#FAF8F4',
          100: '#F2EEE6',
          200: '#E8E1D4',
          300: '#D9CFB8',
          400: '#C4B598',
          500: '#A89977',
          600: '#87795C',
          700: '#6B5F48',
          800: '#4E4635',
          900: '#332E22',
        },
        verde: {
          50: '#F2F7F3',
          100: '#E0EBE3',
          200: '#C2D6C7',
          300: '#9BBA9F',
          400: '#8BAA91',
          500: '#6B9077',
          600: '#557560',
          700: '#425A49',
          800: '#334537',
          900: '#243026',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};
