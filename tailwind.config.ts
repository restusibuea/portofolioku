import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "rgb(var(--bg-dark) / <alpha-value>)",
        "dark-bg": "var(--bg-dark)",
        "darker-bg": "var(--bg-darker)",
        "text-dark": "var(--text-dark)",
        accent: {
          orange: "var(--accent-orange)",
          "dark-orange": "var(--accent-dark-orange)",
          red: "var(--accent-red)",
        },
      },
      boxShadow: {
        "orange-glow": "0 0 25px var(--accent-orange)",
        "orange-glow-2x": "0 0 25px var(--accent-orange), 0 0 50px var(--accent-orange)",
        "orange-glow-3x":
          "0 0 25px var(--accent-orange), 0 0 50px var(--accent-orange), 0 0 100px var(--accent-orange)",
      },
      borderRadius: {
        "3xl": "3rem",
      },
    },
  },
  plugins: [],
};

export default config;
