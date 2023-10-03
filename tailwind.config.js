/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      }
    }
  },
  plugins: [],
}