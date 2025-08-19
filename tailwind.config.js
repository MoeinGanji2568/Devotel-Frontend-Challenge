/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        C_gray: {
          50: "#F2F2F2",
          100: "#D9D9D9",
          200: "#808080",
          300: "#333333",
          400: "#262626",
          500: "#1A1A1A",
          600: "#0D0D0D",
        },
        C_primary: {
          100: "#8284FA",
          200: "#5E60CE",
        },
        C_blue: {
          100: "#4EA8DE",
          200: "#1E6F9F",
        },
        C_red: {
          100: "#E25858",
        },
      },
    },
  },
  plugins: [],
};
