/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        gold: "#fbd12c",
        white: "#fff",
        cornflowerblue: {
          "100": "#05a5ff",
          "200": "rgba(5, 165, 255, 0)",
        },
        gainsboro: "#d9d9d9",
        goldenrod: "#facf4e",
        gray: "rgba(17, 41, 69, 0.74)",
        darkslateblue: "#00358e",
        dimgray: "#5f5f5f",
        blueviolet: "#9747ff",
        silver: "#c4c4c4",
        darkseagreen: "#86aa61",
      },
      spacing: {},
      fontFamily: {
        "century-gothic": "'Century Gothic'",
        avenir: "Avenir",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      "31xl": "50px",
      "19xl-8": "38.8px",
      "21xl": "40px",
      "56xl": "75px",
      "17xl-3": "36.3px",
      "77xl": "96px",
      "16xl": "35px",
      "11xl": "30px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
