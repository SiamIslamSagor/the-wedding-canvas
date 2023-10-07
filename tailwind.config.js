/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        stylishFont: "'Yellowtail', cursive",
      },
      textColor: {
        "custom-color": "#bc9b6a",
      },
    },
  },
  plugins: [require("daisyui")],
};
