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
      laptop: "10vw 5fr 10vw",
      phone: "1fr",
    },
    gridTemplateRows: {
      main: "5vh 5vh 5vh 1fr",
    },
    screens: {
      mb: "1px",
      xfl: "414px",
      xxl: "640px",
      xl: "769px",
      lg: "1024px",
      md: "1280px",
      lpt: "1440px",
      sm: "1536px",
    },
    typography: {
      DEFAULT: {
        css: {
          h2: {
            margin: "",
            padding: "",
          },
          h3: {},
          h4: {},
          h5: {},
          p: {
            color: "#A3ADC7",
            fontSize: "1.5rem",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
