// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in the src directory
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-img": "url('/src/images/bgZid.jpg')",
        "custom-home": "url('/src/images/bgHome2.jpg')"
      },
      colors: {
        primary: "rgba(55, 73, 87, 0.9)",
        secondary: "rgba(250, 206, 37, 1)",
        blue: "rgba(149, 202, 234, 0.8)",
        textColor: "rgba(51, 51, 51, 1)",
      },
      fontFamily: {
        sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
