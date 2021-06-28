module.exports = {
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#1a202c",
      link: "#9f7aea",
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
      tab: "5vw 4fr 5vw",
      laptop: "10vw 5fr 10vw",
      phone: "1fr",
    },
    gridTemplateRows: {
      main: "5vh 5vh 5vh 1fr",
      pp: "20vh 20vh",
    },
    screens: {
      mb: "1px",
      smp: "375px",
      xfl: "414px",
      xxl: "640px",
      xl: "768px",
      lg: "1024px",
      md: "1280px",
      lpt: "1440px",
      sm: "1536px",
    },
    typography: {
      DEFAULT: {
        css: {
          h1: {
            fontWeight: "600",
            fontSize: "3rem",
            color: "#606d7f",
            margin: "2rem 0 0 0",
            color: "#ffff00",
          },
          h2: {
            fontSize: "2.75rem",
            margin: "",
            padding: "",
            color: "#ffff00",
          },
          h3: { color: "#ffff00", fontSize: "2.5rem" },
          h4: { color: "#ffff00", fontSize: "2.25rem" },
          h5: { color: "#ffff00", fontSize: "2rem" },
          p: {
            padding: "1rem 0",
            color: "#A3ADC7",
            fontSize: "20px",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
