import ErrorPage from "next/error"
import Link from "next/link"
import { useRouter } from "next/router"
import { getAllPosts, getPostBySlug } from "../../components/blog/blog.api"
import PostBody from "../../components/blog/blog.main"
import markdownToHtml from "../../components/blog/blog.parser"
import GlobalLayout from "../../components/global/global.layout"

const BlogPost = ({ post }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      <GlobalLayout className="read">
        <Link href="/blog" onClick={() => router.back()}>
          <a
            className="
              mb:bg-link
              mb:text-aux
                mb:fixed
                mb:px-1
                mb:py-1
                mb:top-0
                mb:right-0
                sm:fixed
                sm:px-4
                sm:py-1
                sm:top-1/2
                sm:right-96
                "
          >
            &larr; Blog
          </a>
        </Link>
        {router.isFallback ? (
          <div>Loading…</div>
        ) : (
          <>
            <h1
              className="
    text-secondaryLink
    font-semibold
    text-5xl
    mb:pl-3
    mb:pr-3
    mb:mt-10
    smp:mt-10
    xfl:pl-3
    xfl:pr-3
    xfl:mt-10
    lpt:mt-10
    lpt:px-3"
            >
              {post.title}
            </h1>
            <PostBody content={post.content} />
          </>
        )}
      </GlobalLayout>
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ])
  const content = await markdownToHtml(post.content || "")

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"])

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default BlogPost
