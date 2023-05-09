/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ACAFFF",
        background: "#151517",
        text: "#F5F5F5"
      },
      keyframes: {
        color: {
          "0%,100%": {
            color: "#F5F5F5"
          },
          "50%": {
            color: "#ACAFFF"
          }
        },
        fill: {
          "0%,100%": {
            fill: "#F5F5F5"
          },
          "50%": {
            fill: "#ACAFFF"
          }
        },
        background: {
          "0%,100%": {
            background: "#F5F5F5"
          },
          "50%": {
            background: "#ACAFFF"
          }
        },
        border: {
          "0%,100%": {
            border: "1px solid #F5F5F5"
          },
          "50%": {
            border: "1px solid #ACAFFF"
          }
        }
      },
      animation: {
        color: "color 2s linear infinite",
        fill: "fill 2s linear infinite",
        background: "background 2s linear infinite",
        border: "border 2s linear infinite"
      },
      fontFamily: {
        sans: "Outfit, sans-serif"
      }
    }
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@tailwindcss/typography")
  ]
}
