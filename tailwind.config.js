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
      },
      fontFamily: {
        raleway: "raleway",
        alex: "alex",
      },
    },
  },
  plugins: [],
};
