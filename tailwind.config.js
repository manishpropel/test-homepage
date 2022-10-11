/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray75: "#E6E9ED",
        gray100: "#DDE1E6",
        gray400: "#878D96",
        gray600: "#4D5358",
        gray700: "#343A3F",
        gray900: "#121619",
        shade910: "rgba(255, 255, 255, 0.1)",
        shade930: "rgba(203, 203, 203, 0.7)",
        shade960: "rgba(255, 255, 255, 0.54)",
        green300: "#00FFA4",
        green400: "#00CC83",
        gradient910:
          " linear-gradient(103.62deg, #01A76C 11.55%, #71EDB5 107.01%)",
      },
      spacing: {
        "60px": "60px",
        "86px": "86px",
        "450px":"450px",
        "526px": "526px",
        "1080px": "1080px",
      },
      maxWidth: {
        "526px": "526px",
        "1080px": "1080px",
        "1440px": "1440px",
      },
    },
  },
  plugins: [],
};
