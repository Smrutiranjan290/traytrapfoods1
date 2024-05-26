/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Protest Riot", "sans-serif"],
        formhead: ["Kode Mono", "sans-serif"],
        menuitem: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};
