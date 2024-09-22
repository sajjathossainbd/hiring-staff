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
        // heading, button
        blue: "#3C65F5",
        darkBlue: "#05274F",

        // text -
        gray: "#4F5E64", // paragraphs tags
        lightGray: "#A0Abb8", //  halka light color

        // dark theme text color
        lightText: "#E0E7F6",

        // dark theme button color
        lightBlue: "#3C65F5",

        // background colors
        bgLightBlue: "#F8FAFF",
        bgDeepBlue: "E0E7F6",
        bgLightWhite: "#f2f6fd",

        // Other colors
        white: "#ffffff",
        black: "#000000",
       

        softLightBlue: "#F8FAFF",
 
      },
    },
  },
  plugins: [require("daisyui")],
};
