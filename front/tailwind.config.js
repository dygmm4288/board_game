const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        10: "10px",
      },
      colors: {
        ["primary-color"]: "var(--primary-color)",
        ["primary-background-color"]: "var(--primary-background-color)",
        'secondary-bg-color' : 'var(--secondary-background-color)',
        'primary-border-color': 'var(--primary-border-color)',
        "primary-font-color": "#767676",
      },
      boxShadow: {
        "header-nav": "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
      },
      borderRadius: {
        10: "10px",
      },
    },
  },
  plugins: [],
};
export default config;
