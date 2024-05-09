// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     function ({ addBase, theme }) {
//       addBase({
//         "@font-face": {
//           fontFamily: "Covered By Your Grace",
//           fontStyle: "normal",
//           fontWeight: "400",
//           src: 'url(https://fonts.gstatic.com/s/coveredbyyourgrace/v12/QGYwz-AZahWOJJI9kyrQv7CSiC0L4uqW_X2tCNujow.woff2) format("woff2")',
//         },
//         ".covered-by-your-grace": {
//           fontFamily: "Covered By Your Grace, cursive",
//         },
//       });
//     },
//   ],
// };

// tailwind.config.js

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Covered By Your Grace",
          fontStyle: "normal",
          fontWeight: "400",
          src: 'url(https://fonts.gstatic.com/s/coveredbyyourgrace/v12/QGYwz-AZahWOJJI9kyrQv7CSiC0L4uqW_X2tCNujow.woff2) format("woff2")',
        },
        ".covered-by-your-grace": {
          fontFamily: "Covered By Your Grace, cursive",
        },
      });
    },
  ],
};

export default config;
