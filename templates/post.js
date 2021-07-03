import Head from "next/head"
import Link from "next/link"
import GlobalLayout from "../components/global/global.layout"

export default function Post({ children, frontMatter }) {
  const { title } = frontMatter
  return (
    <GlobalLayout>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={`A blog posted dedicated to ${title}`}
        />
      </Head>

      <article className="prose">{children}</article>
      <div>
        <Link href="/blog">
          <a
            className="
              mb:bg-link
              mb:text-label
                mb:fixed
                mb:px-1
                mb:py-1
                mb:top-0
                mb:right-0
                sm:fixed
                sm:px-4
                sm:py-2
                sm:top-1/2
                sm:right-96
                "
          >
            &larr; Blog
          </a>
        </Link>
      </div>
    </GlobalLayout>
  )
}
