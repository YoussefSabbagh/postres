/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        myBlue: {
          100: '#78c0e0',
          300: '#449dd1',
          500: '#192bc2',
          700: '#150578',
          900: '#0e0e52',
        },
        lemon: '#faff00',
        logo: '#4ed91e',
      },
    },
  },
  plugins: [],
};
