/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBrown: "#512a10",
        secondaryBrown: "#986f57",
        mainGray: "#4d4d4d",
        secondaryGray: "#676767",
        tertiaryGray: "#CBC0B8",
      },
      fontFamily: {
        raleway: "raleway",
        alex: "alex",
        roboto: "roboto",
      },
      backgroundSize: {
        custom: "200%",
        "90%": "90%",
        "80%": "80%",
        "100%": "100%",
      },
      screens: {
        ss: "420px",
      },
    },
  },
  plugins: [],
};
