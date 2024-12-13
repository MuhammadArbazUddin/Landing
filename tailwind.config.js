/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "5px 5px 0px 0px rgba(0,0,0,0.75)",
      },
    },
  },
  plugins: [],
};
