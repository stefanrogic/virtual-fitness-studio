/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", , "./src/**/*.js", "./src/**/*.ts"],
  theme: {
    screens: {
      sm: "480px",
      md: "786px",
      lg: "976px",
      xl: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
