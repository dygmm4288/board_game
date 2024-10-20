const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    opacity: Object.fromEntries(
      Array.from({ length: 101 }, (_, index) => [index, `${index / 100}`]),
    ),
    extend: {
      fontSize: {
        10: "10px",
        14: "14px",
      },
      colors: {
        ["primary-color"]: "var(--primary-color)",
        ["primary-background-color"]: "var(--primary-background-color)",
        "secondary-bg-color": "var(--secondary-background-color)",
        "primary-border-color": "var(--primary-border-color)",
        "primary-font-color": "#767676",
      },
      boxShadow: {
        "header-nav": "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
      },
      borderRadius: {
        10: "10px",
      },
      animation: {
        "spinner-fade": "spinner-fade 1s infinite",
      },
      keyframes: {
        ["spinner-fade"]: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
export default config;
