import Link from "next/link"
import { useRouter } from "next/router"

const Header = () => {
  const router = useRouter()
  return (
    <header className={router.pathname !== "/blog" ? "headerb" : ""}>
      <nav>
        <ul>
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
    </header>
  )
}
export default Header
