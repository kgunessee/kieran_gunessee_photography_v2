/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blueBlack: "#21252D", //Header BG DM / Text LM / Mobile Menu BG
        almostBlack: "#101010", //Header BG DM / Content BG DM
        almostWhite: "#EEEEEE", //Content BG LM / Text DM
        lightBlue: "#92DCE5", //Accent - Buttons & Links / <hr>
        royalBlue: "#1E3178", //Accent - Misc
      },
      margin: {
        mobileXMargin: "1rem",
      },
      padding: {
        mobileXPadding: "0.5rem",
      },
    },
  },
  plugins: [],
};
