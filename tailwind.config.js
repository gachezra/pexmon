/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'epilogue': ['Epilogue', 'system-ui']
    },
    screens: {
      'sm': '375px',
      // => @media (min-width: 375px) { ... }
      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

