/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
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
        C_gray_light: {
          50: "#FFFFFF",
          100: "#F8F9FA",
          200: "#E9ECEF",
          300: "#DEE2E6",
          400: "#CED4DA",
          500: "#ADB5BD",
          600: "#6C757D",
          700: "#495057",
          800: "#343A40",
          900: "#212529",
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
        background: {
          primary: "var(--background-primary)",
          secondary: "var(--background-secondary)",
          tertiary: "var(--background-tertiary)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
        },
        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
        },
        card: {
          background: "var(--card-background)",
          border: "var(--card-border)",
        },
      },
    },
  },
  plugins: [],
};
