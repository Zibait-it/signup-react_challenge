import type { Config } from "tailwindcss";

const colors = {
  background: "#FEF2F2",
  primary: {
    50: "#FCFCFC",
    300: "#ABAEB7",
    600: "#5A5F70",
    700: "#3F4559",
    800: "#353A4B",
    900: "#1C202E",
  },
  complementary: {
    500: "#EF4444",
    600: "#DC2626",
    700: "#B91C1C",
  },
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        background: colors.background,
        primary: colors.primary,
        complementary: colors.complementary,
      },
    },
  },
  plugins: [],
};
export default config;
