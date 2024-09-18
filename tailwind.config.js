/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#3C65F5",
      darkBlue: "#05274F",
      gray: "#4F5E64",
      lightGray: "#A0Abb8",
      white: "#ffffff",
      lightWhite: "#F9FBFF",
    },
  },
  plugins: [require("daisyui")],
};
