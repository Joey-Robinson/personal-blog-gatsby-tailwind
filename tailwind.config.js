module.exports = {
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#1a202c",
      link: "#9f7aea",
      input: "#606d7f",
      mid: "#CFBD75",
      secondary: "#382E5E",
      aux: "#ffff00",
    }),
    textColor: {
      primary: "#b6bfca",
      label: "#1a202c",
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
      pp: "15vh 35vh 15vh",
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
          h1: {},
          h2: {
            fontSize: "2.75rem",
            padding: "0 0.75rem",
            color: "#606d7f",
          },
          h3: { padding: "0 0.75rem", color: "#606d7f", fontSize: "2.5rem" },
          h4: { padding: "0 0.75rem", color: "#606d7f", fontSize: "2.25rem" },
          h5: { padding: "0 0.75rem", color: "#606d7f", fontSize: "2rem" },
          h6: { padding: "0 0.75rem", color: "#606d7f", fontSize: "1.75rem" },
          p: {
            padding: "1rem 0.75rem",
            color: "#ffff00",
            fontSize: "20px",
          },
          img: {
            margin: "1rem 0",
          },
          ul: {
            listStyle: "square",
            padding: "0 0.75rem",
            margin: "1rem",
          },
          li: {
            padding: "0.25rem 0",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
