import { Link } from "gatsby"
import React from "react"
import Navigation from "./header.nav"

const Header = () => (
  <header className="col-start-2 row-start-2 mt-1">
    <h2 className="text-3xl font-medium">
      <Link to="/">Joey</Link>
    </h2>
    <Navigation />
  </header>
)

export default Header
