/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/scenes/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./node_modules/flowbite-react/**/*.js",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%": {
            transform: "translatey(0px)",
          },
          "50%": {
            transform: "translatey(-20px)",
          },
          "100%": {
            transform: "translatey(0px)",
          },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      colors: {
        primary: "#8ba171",
        secondary: "#b8bc7f",
        lavender: "#E6E6FA",
        alt: "#6A2875",
        alt2: "#A8A9AE",
        enaya: "#8F53A1"
      },
      fontFamily: {
        Oswald: ["inter, sans-serif"],
        Charter: ["Charter, serif"],
        Bebas: ["Bebas Neue, sans-serif"],
        sans: ['var(--font-inter)'],
        playfair: ['"Playfair Display"', 'serif'],
      },

      screens: {
        xxs: "370px",
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1020px",
        lg: "1200px",
        xlg: "1300px",
        xxl: "1700px",
      },
      boxShadow: {
        "5xl": "0px 10px 30px rgba(0,0,0, 0.5)",
      },
      backgroundImage: {
        bg1: "url('/public/bg1.jpg')",
        banner: "url('/src/assets/Banner.png')",
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
