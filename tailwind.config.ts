import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "3.5xl": "2rem",
      },
      colors: {
        success: {
          main: "#00B207",
          dark: "#2C742F",
        },
        gray: {
          50: "#F7F7F7",
          300: "#B3B3B3",
          400: "#808080",
          500: "#4D4D4D",
          800: "#333333",
          900: "#1A1A1A",
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
