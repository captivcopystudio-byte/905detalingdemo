/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        muted: "#6b7280"
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0,0,0,0.08)'
      }
    },
  },
  plugins: [],
}
