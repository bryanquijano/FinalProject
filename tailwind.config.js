module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        "screen-nonav": "calc(100vh - 88px)",
      },
      colors: {
        "slate-gray": "#121212",
        "slate-gray-light": "#181818",
        "slate-gray-lighter": "#303030",
        "slate-gray-lightest": "#464646",
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      spacing: {
        1200: "1200px",
      },
    },
  },
  plugins: [],
};
