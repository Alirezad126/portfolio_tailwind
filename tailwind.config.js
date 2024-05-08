/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ,
  ],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['"Licorice"', "sans-serif"],
      },
      screens: {
        mobile: { max: "640px" },
      },

      backgroundImage: {
        "gradient-to-b": "linear-gradient(180deg, #0c0c1d, #000000)",
        "gradient-to-a": "linear-gradient(180deg, #000000, #0c0c1d)",
      },

      textShadow: {
        default: "5px 5px 5px grey",
      },

      colors: {
        "custom-gray": "rgb(217, 208, 208)",
      },
    },
  },
  plugins: [
    
],
};
