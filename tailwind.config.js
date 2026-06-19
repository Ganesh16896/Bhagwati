/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "lake-deep": "#6b4f3a",
        "lake-mid": "#8c6a4e",
        algae: "#c4a265",
        "algae-light": "#d4b996",
        "water-surface": "#e8dcc8",
        "off-white": "#f7f2ea",
        "dark-slate": "#3e2723",
        "text-muted": "#9e8572",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};
