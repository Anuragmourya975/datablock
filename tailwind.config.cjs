/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pepegray: { DEFAULT: "#4c497e" },
        anurag: "#ff0072",
        bc: " #f5deb31a",
      },
    },
  },
  plugins: [],
};
