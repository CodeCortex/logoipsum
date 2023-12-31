/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        popp: ["Poppins","sans-serif"],
      },
      colors:{
        primary: '#0076CE',
        secondary: '#9400D3',

      },
    },
  },
  plugins: [],
}