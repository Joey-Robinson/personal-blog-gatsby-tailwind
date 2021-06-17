import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "../components/global/global.layout"

const blogPosts = ({ data, pageContext }) => {
  // const post = data.mdx
  const title = data.mdx.frontmatter.title
  const date = data.mdx.frontmatter.date
  const body = data.mdx.body
  const last = pageContext.previous.node.fields.slug
  return (
    <Layout>
      <h1 className="text-link text-5xl">{title}</h1>
      <p className="post-date">{date}</p>

      <article className="prose">
        <MDXRenderer>{body}</MDXRenderer>
      </article>
      <Link className="text-7xl text-aux" to={last}>
        Wow
      </Link>
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
