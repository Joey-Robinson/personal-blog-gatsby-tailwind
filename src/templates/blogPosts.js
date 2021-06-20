import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "../components/global/global.layout"

const blogPosts = ({ data, pageContext }) => {
  // const post = data.mdx
  const title = data.mdx.frontmatter.title
  const date = data.mdx.frontmatter.date
  const body = data.mdx.body

  // Links to Previous || Next blog post
  const lastTitle = pageContext.previous.node.frontmatter.title
  const last = pageContext.previous.node.fields.slug
  return (
    <Layout>
      <h1 className="text-aux text-5xl mt-8 mb-1">{title}</h1>
      <p className="text-xl text-paragraphn">{date}</p>

      <article className="prose">
        <MDXRenderer>{body}</MDXRenderer>
      </article>

      <div className="bottom my-6">
        {pageContext.previous === null ? (
          <div></div>
        ) : (
          <div>
            <Link className="text-xl text-link" to={last} rel="previous">
              &larr; {lastTitle}
            </Link>
          </div>
        )}
        {pageContext.next === null ? (
          <div></div>
        ) : (
          <div>
            <Link
              className="text-xl text-link"
              to={pageContext.next.node.fields.slug}
              rel="next"
            >
              {pageContext.next.node.frontmatter.title} &rarr;
            </Link>
          </div>
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
