/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBrown: "#512a10",
        mainGray: "#4d4d4d",
        secondaryGray: "#676767",
        secondaryBrown: "#A87A61",
      },
      fontFamily: {
        raleway: "raleway",
        alex: "alex",
        roboto: "roboto",
      },
      backgroundSize: {
        custom: "200%",
      },
      screens: {
        ss:'420px'
      }
    },
  },
  plugins: [],
};
