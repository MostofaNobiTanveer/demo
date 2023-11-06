/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        autograph: ["autograph", "sans-serif"],
        graphit: ["graphit", "sans-serif"],
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
      colors: {
        orange: "#F44E2B",
        dune: "#3F3531",
        pearl: "#FAF7EE",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite forwards",
      },
    },
  },
  plugins: [],
};
