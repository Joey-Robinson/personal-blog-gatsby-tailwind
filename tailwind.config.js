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
    gridTemplateColumns: {
      main: "1fr 2fr 1fr",
      phone: "1fr",
    },
    gridTemplateRows: {
      main: "5vh 5vh 5vh 1fr",
    },
    screens: {
      xxl: "640px",
      xl: "769px",
      lg: "1024px",
      md: "1280px",
      sm: "1536px",
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
