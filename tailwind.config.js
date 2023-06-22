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
        'dark-1b': '#1B1B1B',
        'dark-1f': '#1F1F1F',
        'dark-15': '#151515',
        'dark-21': '#1f1f1f',
        'dark-26': '#262626',
        'dark-24': '#242424',
        'dark-31': '#313131',
        'dark-42': '#424242',
        'gray-7d': '#7D7D7D',
        'gray-c9': '#C9C9C9',
        'white-f0': '#F0F0F0',
        'white-b': '#bbbbbb',
        'white-d6': '#D6D6D6',
        'cyan': '#3AA6AD',
        'cyan-2f': '#218f93',
        'green': '#47EA75',
        'red': '#D84343',
        'pink': '#BC49B1'
      }
    },
  },
  plugins: [],
}

