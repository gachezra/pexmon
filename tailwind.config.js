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
    extend: {
      colors: {
        cream: '#f9f5e3', // Cream color
        'light-cream': '#fdf9e8', // Light cream color
        brown: '#7d5b35', // Brown color
        'dark-brown': '#5b3f22', // Darker brown for hover effects
      },
    },
  },
  plugins: [],
}

