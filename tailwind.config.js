module.exports = {
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#1a202c",
    }),
    textColor: {
      primary: "#b6bfca",
      secondary: "#ffffff",
      link: "#9f7aea",
      aux: "#ffff00",
      paragraph: "#A3ADC7",
      secondaryLink: "#606d7f",
    },
    typography: {
      DEFAULT: {
        css: {
          h2: {
            margin: "1rem 0 0 0",
            padding: ".75rem 0",
          },
          h3: {
            margin: "1rem 0 0 0",
            padding: ".75rem 0",
          },
          h4: {
            margin: "1rem 0 0 0",
            padding: ".75rem 0",
          },
          h5: {
            margin: "1rem 0 0 0",
            padding: ".75rem 0",
          },
          p: {
            color: "#A3ADC7",
            fontSize: "1.5rem",
            padding: ".5rem 0",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
