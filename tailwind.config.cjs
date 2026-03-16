/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1F1E24",
        mist: "#F2EFE8",
        sand: "#E8D9C4",
        sun: "#F4A259",
        sea: "#2A9D8F",
        berry: "#B85042"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(31, 30, 36, 0.14)"
      }
    }
  },
  plugins: []
};
