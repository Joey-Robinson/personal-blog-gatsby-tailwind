import { Link } from "gatsby"
import React from "react"

const Navigation = () => (
  <nav className="mt-4">
    <ul className="flex space-x-16 text-xl text-link">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog/">Blog</Link>
      </li>
      <li>
        <Link to="/contact/">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
