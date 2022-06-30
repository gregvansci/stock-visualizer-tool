module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'black': '#000000',
        'palette-1': '#D3F6D1',
        'palette-2': '#A7D7C5',
        'palette-3': '#74B49B',
        'palette-4': '#5C8D89',
        'palette-5': '#D1EECC',
        'primary': '#d9fcf4',
        'secondary': '#b8f9ea',
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('tailwindcss-elevation')(['responsive']),
  ],
}