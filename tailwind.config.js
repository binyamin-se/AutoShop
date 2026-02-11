/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        deepNavy: "#0F172A",
        autoRed: "#D62828",
        lightGray: "#F3F4F6",
        charcoal: "#111827",
        midGray: "#4B5563"
      },
      boxShadow: {
        card: "0 12px 30px -16px rgba(15, 23, 42, 0.35)"
      }
    }
  },
  plugins: []
};
