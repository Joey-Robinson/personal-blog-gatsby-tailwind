import React from "react"
import Header from "../header/header.main"

const Layout = ({ children }) => {
  return (
    <main className="text-secondary">
      <Header />
      <section className="col-start-2 row-start-4">
        <div className="">{children}</div>
      </section>
    </main>
  )
}

export default Layout
