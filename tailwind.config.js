/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        cornflowerblue: {
          "100": "#05a5ff",
          "200": "rgba(5, 165, 255, 0)",
        },
        white: "#fff",
        silver: "#c4c4c4",
        darkseagreen: "#86aa61",
        gainsboro: "#d9d9d9",
        goldenrod: "#facf4e",
        gold: "#fbd12c",
        gray: "rgba(17, 41, 69, 0.74)",
        darkslateblue: "#00358e",
        dimgray: "#5f5f5f",
        blueviolet: "#9747ff",
      },
      spacing: {},
      fontFamily: {
        avenir: "Avenir",
        "century-gothic": "'Century Gothic'",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      "77xl": "96px",
      "16xl": "35px",
      "11xl": "30px",
      "31xl": "50px",
      "21xl": "40px",
      "56xl": "75px",
      "19xl-8": "38.8px",
      "17xl-3": "36.3px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
