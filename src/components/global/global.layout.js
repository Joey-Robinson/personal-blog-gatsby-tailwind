import Header from "../header/header.main"

const GlobalLayout = ({ children }) => (
  <main className="primary">
    <Header />
    <section>{children}</section>
  </main>
)

export default GlobalLayout
