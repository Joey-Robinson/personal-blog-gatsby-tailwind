import Link from "next/link"
import { useRouter } from "next/router"

const Navigation = () => {
  const router = useRouter()
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a className={router.pathname == "/" ? "active" : ""}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className={router.pathname == "/blog" ? "active" : ""}>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className={router.pathname == "/contact" ? "active" : ""}>
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navigation
