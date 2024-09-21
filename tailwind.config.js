/* eslint-disable no-undef */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-image": "url('./src/assets/banner/bg-banner.svg')",
      },
      colors: {
        blue: "#3C65F5",
        darkBlue: "#05274F",
        softBlue: "#E0E6F7",
        softLightBlue: "#F8FAFF",
        lightBlue: "#f2f6fd",

        gray: "#4F5E64",
        lightGray: "#A0Abb8",
        white: "#ffffff",
        lightWhite: "#F9FBFF",
        black: "#000000",
        darkBg: "#1A202C",
        darkText: "#CBD5E0",
      },
    },
  },
  plugins: [require("daisyui")],
};
