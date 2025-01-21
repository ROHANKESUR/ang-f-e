const { transform } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  safelist: [
    'toast-success',
    'toast-danger',
    'toast-warning',
  ],
  theme: {
    extend: {
      colors: {
        navyBlue: "hsl(213, 82%, 13%)",
      },
      backgroundImage: {
        angBg: "url('/assets/images/ang1bg2.jpg')",
        angBg2: "url('/assets/images/ang-1_bg.jpg')",
      },
      fontFamily: {
        poppins: ["Poppins"],
        sen: ["Sen Variable", "Poppins"],
        roboto: ["Roboto"],
        geo: ["Geologica Variable"],
        mont: ["Montserrat Variable"],
        fraunc: ["Fraunces Variable"],
      },
     
    },
  },
  plugins: [],
};
