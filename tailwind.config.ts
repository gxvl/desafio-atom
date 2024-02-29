/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      pop: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        purple: {
          50: "#9E6DC2",
          70: "#7E4E9E",
          100: "#290742",
          200: "#170027",
        },

        backgroundImage: {
          "bg-img-1": "url('/img-1.png')",
          "bg-img-2": "url('/img-2.png')",
          "feature-bg": "url('/feature-bg.png')",
          pattern: "url('/pattern.png')",
          "pattern-2": "url('/pattern-bg.png')",
        },
        screens: {
          xs: "400px",
          "3xl": "1680px",
          "4xl": "2200px",
        },
        maxWidth: {
          "10xl": "1512px",
        },
        borderRadius: {
          "5xl": "40px",
        },
      },
    },
    plugins: [],
  },
};
