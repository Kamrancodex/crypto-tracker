/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    darkMode: "class",
    fontFamily: {
      sans: ['"Space Grotesk"', "sans-serif"],
    },
  },
  plugins: [],
};
