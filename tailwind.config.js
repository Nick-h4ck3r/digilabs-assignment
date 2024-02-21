/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        priBg: "#111729",
        secBg: "#1C2A4E",
        triBg: "#151C39",
        quatBg: "#2C3A58",
        priAcc: "#409BEE"
      }

    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

