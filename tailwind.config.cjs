/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Jost", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      "primary-peach": "#e7816b",
      "primary-dark": "#1d1c1e",
      "secondary-peach": "#ffad9b",
      "secondary-dark": "#333136",
      "secondary-grey": "#f1f3f5",
    },
    fontSize: {
      base: ["1rem", "1.625rem"],
      xl: [
        "1.25rem",
        {
          letterSpacing: "0.3125rem",
          lineHeight: "1.625rem",
        },
      ],
      "4xl": [
        "2.5rem",
        {
          letterSpacing: "0.125rem",
          lineHeight: "3rem",
        },
      ],
    },
  },
  plugins: [],
};
