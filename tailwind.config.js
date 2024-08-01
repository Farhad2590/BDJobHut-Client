/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000978",
        secondary: "#000978",
        "btn-primary": "#000978",
        "btn-hover": "#000978",
      },
    },
  },
  plugins: [require("daisyui")],
};
