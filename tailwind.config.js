module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.njk", "./src/**/*.md"],
  theme: {
    container: {
      center: true,
      padding: "2rem"
    },
    extend: {
      colors: {
        black: "var(--color-black)",
        blue: "var(--color-blue)",
        gray: "var(--color-gray)",
        orange: "var(--color-orange)",
        red: "var(--color-red)",
        white: "var(--color-white)",
        yellow: "var(--color-yellow)"
      }
    },
    fontFamily: {
      default: ["Source Sans Pro", "sans-serif"],
      headings: ["Playfair Display", "serif"]
    }
  },
  variants: {},
  plugins: []
}
