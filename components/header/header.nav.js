import Link from "next/link"

const Navigation = () => {
  return (
    <nav className="mt-4">
      <ul className="flex space-x-16 text-xl text-link">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
