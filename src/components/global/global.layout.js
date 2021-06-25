import Header from "../header/header.main"

const GlobalLayout = ({ children, className }) => (
  <main className="text-secondary grid sm:grid-cols-main lpt:grid-cols-laptop grid-rows-main h-screen w-screen overflow-x-hidden xl:grid-cols-tab">
    <Header />
    <section className="col-start-2 mb:row-start-3">
      <div className={className}>{children}</div>
    </section>
  </main>
)

export default GlobalLayout
