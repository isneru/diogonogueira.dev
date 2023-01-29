/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3A6AA4",
        primaryhover: "#6290C8",
        background: "#EEEEEE",
        text: "#191723",
        textdim: "#1F1C2B"
      },
      keyframes: {
        color: {
          "0%,100%": {
            color: "#191723"
          },
          "50%": {
            color: "#3A6AA4"
          }
        },
        fill: {
          "0%,100%": {
            fill: "#191723"
          },
          "50%": {
            fill: "#3A6AA4"
          }
        },
        background: {
          "0%,100%": {
            background: "#191723"
          },
          "50%": {
            background: "#3A6AA4"
          }
        },
        border: {
          "0%,100%": {
            border: "1px solid #191723"
          },
          "50%": {
            border: "1px solid #3A6AA4"
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
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })]
}
