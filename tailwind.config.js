/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      pink: "rgb(126, 63, 102);",
      gray: "#cbd5e1",
      black: "font-bold",
      el: "#f5f5f5",
      green: "#86efac",
    },

    screens: {
      sm: { min: "640px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px", max: "1535px" },
      xxl: { min: "1536px" },
    },
    // fontFamily: {
    //   nunito: ["Nunito", "sans-serif"],
    // },
    border: {
      sizing: "border-box",
      padding: 0,
      margin: 0,
    },
  },

  plugins: [],
};

// {
//   box-sizing: border-box;
//   padding: 0;
//   margin: 0;
// }

// className="border-8 border-gray border-solid no-underline w-20 h-10 bg-gray text-white"
