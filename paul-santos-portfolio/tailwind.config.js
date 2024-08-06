/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-teal-white":
          "linear-gradient(to bottom, #1a8d8d 65%, #80C0C0 90%, #E6F2F2 100%)",
      },
      colors: {
        "light-teal": "#b3d9d9",
      },
    },
  },
  plugins: [],
};
