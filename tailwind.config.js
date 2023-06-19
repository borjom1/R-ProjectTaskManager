/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: '#root',
  theme: {
    extend: {
      colors: {
        'dark-1a': '#1A1A1A',
        'dark-26': '#262626',
        'dark-24': '#242424',
        'dark-31': '#313131',
        'dark-42': '#424242',
        'white-f0': '#F0F0F0',
        'white-b': '#bbbbbb',
        'cyan': '#3AA6AD'
      }
    },
  },
  plugins: [],
}

