/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'btn': '#BF885E',
        'btn-hover': '#d9945f',
        'btn2': '#856A54',
        'btn-hover2': '#A38C7A',
        'primary': "#473D35",
        'headingColor': '#21160e',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'anglecia': ['AngleciaProDisplay', 'sans-serif'],
      },
      backgroundImage:{
        'hero': "url('/src/assets/1920x1064_bg.jpg')",
      }
    },
  },
  plugins: [],
}

