/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/**/*.html"],
  theme: {
    extend: {
      colors: {
        // primary
        g200: "hsl(148, 38%, 91%)",
        g600: "hsl(169, 82%, 27%)",
        myRed: "hsl(0, 66%, 54%)",

        // neutral
        grey500: "hsl(186, 15%, 59%)",
        grey900: "hsl(187, 24%, 22%)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["garden"],
  },
};
