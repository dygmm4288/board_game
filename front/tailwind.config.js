import { extend, size } from "lodash";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      10: "10px",
    },
    extend: {
      colors: {
        ["primary-color"]: "var(--primary-color)",
        ["primary-background-color"]: "var(--primary-background-color)",
        "primary-font-color": "#767676",
      },
      boxShadow: {
        "header-nav": "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
