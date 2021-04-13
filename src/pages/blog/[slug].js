import ErrorPage from "next/error"
import { useRouter } from "next/router"
import { getAllPosts, getPostBySlug } from "../../components/blog/blog.api"
import PostBody from "../../components/blog/blog.main"
import markdownToHtml from "../../components/blog/blog.parser"

const BlogPost = ({ post }) => {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <div>
      <p>From BlogPost - This will be the actual blog content || page</p>
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <article className="newsletter">
          <PostBody content={post.content} />
        </article>
      )}
    </div>
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
