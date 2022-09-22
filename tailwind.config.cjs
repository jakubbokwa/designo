/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Jost", ...defaultTheme.fontFamily.sans],
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
        "base-mobile": ["0.9375rem", "1.5625rem"],
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
        "4xl-mobile": [
          "1.75rem",
          {
            letterSpacing: "1.4px",
            lineHeight: "2.25rem",
          },
        ],
      },
      spacing: {
        4.5: "1.125rem",
        8.5: "2.125rem",
        10.5: "2.625rem",
        21.25: "5.3125rem",
        30: "7.5rem",
      },
      letterSpacing: {
        "mega-wide": "0.3125em",
      },
    },
  },
  plugins: [],
};
