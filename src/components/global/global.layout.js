import React from "react"
import Header from "../header/header.main"

const Layout = ({ children, className = "" }) => {
  return (
    <main className="text-secondary grid xl:grid-cols-main grid-rows-main h-full ">
      <Header />
      <section className="col-start-2 row-start-4">
        <div className={className}>{children}</div>
      </section>
    </main>
  )
}

export default Layout
