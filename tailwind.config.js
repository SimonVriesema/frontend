module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00517D",
        primaryText: "#00314B",
        secondary: "#FFA500",
        secondaryhover: "#e58d00",
        grayish: "#7a7a7a",
        hovergray: "#181818",
        lightblue: "#DAF2FF"
        // Add more colors as needed
      },
      fontFamily: {
        headings: ["LibreBaskerville", "serif"],
        headingsBold: ["LibreBaskervilleBold", "serif"],
      },
      // Add more theme-related configurations as needed
    },
  },
  plugins: [
    require("flowbite/plugin"),
  ],
};
