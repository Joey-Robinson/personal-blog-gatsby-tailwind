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
          h1: {
            color: "#9f7aea",
            fontSize: "3.5rem",
            padding: "1.5rem 0",
          },
          h2: {
            color: "#9f7aea",
            fontSize: "2rem",
            padding: "1rem 0",
          },
          h3: {
            color: "#9f7aea",
            fontSize: "1.75rem",
            padding: "1rem 0",
          },
          p: {
            color: "#A3ADC7",
            fontSize: "1.25rem",
            padding: "1rem 0",
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
          img: {
            width: "100%",
            height: "100%",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
