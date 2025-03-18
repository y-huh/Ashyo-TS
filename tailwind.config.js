// tailwind.config.js
const { heroui } = require("@heroui/theme");

module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/components/(popover|button|ripple|spinner).js",
    "./modules/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/locale/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};
