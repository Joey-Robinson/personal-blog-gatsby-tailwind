import Document, { Head, Html, Main, NextScript } from "next/document"
// prettier-ignore
import "../../styles/main.scss"
// prettier-ignore
// prettier-ignore
import "../../styles/tailwind.css"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <noscript>
            This app uses JavaScript to run. Please consider enabling
            JavaScript.
          </noscript>
        </body>
      </Html>
    )
  }
}
