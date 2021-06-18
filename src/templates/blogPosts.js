import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "../components/global/global.layout"

const blogPosts = ({ data, pageContext }) => {
  // const post = data.mdx
  const title = data.mdx.frontmatter.title
  const date = data.mdx.frontmatter.date
  const body = data.mdx.body
  // console.log(pageContext)
  // const next = pageContext.next.node.fields.slug
  // console.log(next)
  const next =
    pageContext.next === null
      ? "Nothing to read next"
      : pageContext.next.node.fields.slug
  // const last = pageContext.previous.node.fields.slug
  // console.log(last)
  return (
    <Layout>
      <h1 className="text-aux text-5xl mt-8 mb-1">{title}</h1>
      <p className="text-xl text-paragraphn">{date}</p>
      <article className="prose">
        <MDXRenderer>{body}</MDXRenderer>
      </article>
      <div>
        {/* <Link className="text-xl text-aux" to={last}>
          Wow
        </Link> */}
        {next && (
          <Link to={next} rel="next">
            ok
          </Link>
        )}
      </div>
    </Layout>
  )
}
export default blogPosts

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`
