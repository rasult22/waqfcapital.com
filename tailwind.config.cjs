const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        'card': '0px 12px 21.8px -4px rgba(121, 132, 155, 0.10)'
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 30s linear infinite',
        'infinite-scroll-sm': 'infinite-scroll-sm 30s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-sm': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-400%)' },
        }
      },
      fontFamily: {
        Inter: ["Inter Variable"],
        railway: ["Raleway Variable"],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
      
      screens: {
        "custom-screen": { raw: "(max-height: 670px)" },
        lg: { min: "1200px" },
        md: { max: "1200px", min: "700px" },
        sm: { max: "700px", min: "0px" },
      },
    },
  },
  plugins: [require("tailwindcss-fluid-type")],
};