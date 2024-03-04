import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        success: {
          main: "#00B207",
        },
        gray: {
          300: "#B3B3B3",
          800: "#333333",
        },
      },
      padding: {
        "3.5": "0.875rem",
      },
      borderRadius: {
        "10.5xl": "42px",
      },
    },
  },
  plugins: [],
};

export default config;
