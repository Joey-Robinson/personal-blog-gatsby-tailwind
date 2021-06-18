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
            color: "#ffff00",
            fontSize: "2rem",
            margin: "2rem 0 0 0",
            padding: ".75rem 0",
          },
          h3: {
            color: "#ffff00",
            fontSize: "1.75rem",
            margin: "1.5rem 0 0 0",
            padding: ".75rem 0",
          },
          p: {
            color: "#A3ADC7",
            fontSize: "1.5rem",
            padding: ".5rem 0",
          },
          a: {
            color: "#000",
            "&:hover": {
              color: "#2c5282",
            },
          },
          ol: {
            listStyle: "square",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
