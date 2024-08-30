/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'Bahnschrift': ['"Bahnschrift"'],
      },
      colors: {
        'colorBrand-1': '#f6cb6f',
        'colorBrand-2': '#96a5b2',
        'colorBrand-3': '#81b1d4',
        'colorBrand-4': '#152049',
        'colorBrand-5': '#0e1427',
      },
    },
  },
  plugins: [],
};
