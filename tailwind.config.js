/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    backgroundImage: {
      flowers: "url(src/assets/images/flowers.webp)",
      bubbles: "url(src/assets/images/bubbles.webp)"
    },
    backgroundPosition: {
      "position-x": "center top",
      "position-y-center": "center",
      "position-y-none": "none"
    },
    extend: {
      "colors": {
        "light": {
          "100": "#FEE6EE",
          "200": "#FECDDC"
        },
        "dark": {
          "100": "#5F021F",
          "200": "#50021A"
        },
        "gray": {
          "100":"#DFDFDF",
          "200":"#D9D9D9",
          "300":"E3E3E3"
        }
      },
      "fontFamily": {
        "sans": ["Poppins", "sans-serif"]
      },
      fontSize: {
        "10xl": "clamp(3rem, 9vh + 3rem, 12rem)",
        "9xl-extra": "clamp(1rem, 8vh + 0.1rem, 13rem)"
      }
    },
  },
  plugins: [],
};
