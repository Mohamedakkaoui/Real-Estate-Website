/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

const flowbite = require("flowbite-react/tailwind");
const { nextui } = require("@nextui-org/react");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "600px",
      md: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        poppins: "poppins",
        questrial: "Questrial",
      },
      colors: {
        primary: "#FF6400",
        secondary: "#003049",
        secondaryOrange: "#FF8475",
        "main-bg": "#fff",
        "main-dark": "#1F1D2B",
        "card-dark": "#252836",
        "dark-light": "#353949",
        "hover-color-dark": "#2f3343",
        dark: "#2f3343",
      },
      gridTemplateColumns: {
        "16-auto": "250px auto",
      },
    },
  },
  darkMode: "class",
  plugins: [plugin(function ({ addUtilities }) {
    const newUtilities = {
      ".text-muted": {
        opacity: 0.8,
      },
      ".transition-a": {
        transition: "all 0.3s ease-in-out",
      },
      ".card-shadow": {
        boxShadow: " 0 0 0.8rem 0.25rem rgba(0, 0, 0, 0.1)",
      },
      ".shadow-light": {
        boxShadow: "0.1rem 0.1rem 0.3rem .1rem rgba(0, 0, 0, 0.05)",
      },
      ".border-light": {
        border: "1px solid rgba(46, 46, 46, 0.1)",
      },
      ".input-shadow": {
        boxShadow: "0 0 0 1000px #f5f5f9 inset !important",
      },
      ".input-dark-shadow": {
        boxShadow: "0 0 0 1000px #13131A inset !important",
      },
      ".inputAutofillColor": {
        "-webkit-text-fill-color": "#ccc",
      },
      ".flex-center-center": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      ".flex-center-between": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },
      ".flex-align-center": {
        display: "flex",
        alignItems: "center",
      },
    };
    addUtilities(newUtilities);
  }),flowbite.plugin(), nextui()],
};
