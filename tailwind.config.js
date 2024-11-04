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
        almostWhite: "#efefef", //Content BG LM / Text DM
        lightBlue: "#92DCE5", //Accent - Buttons & Links / <hr>
        greyBlue: "#848fbd", //Accent - Misc
      },
      margin: {
        mobileXMargin: "1rem",
      },
      padding: {
        mobileXPadding: "0.5rem",
        desktopXPadding: "10%",
      },
      keyframes: {
        themeButtonSet: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(200%)" },
        },
        themeButtonRise: {
          "0%": { transform: "translateY(200%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        themeButtonSet:
          "themeButtonSet 300ms cubic-bezier(0.68, -0.6, 0.32, 1.2) both",
        themeButtonRise:
          "themeButtonRise 300ms cubic-bezier(0.68, -0.6, 0.32, 1.2) both 350ms",
      },
    },
  },
  plugins: [],
};
