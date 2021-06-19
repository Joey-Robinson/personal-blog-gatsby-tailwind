import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "../components/global/global.layout"

const blogPosts = ({ data, pageContext }) => {
  // const post = data.mdx
  const title = data.mdx.frontmatter.title
  const date = data.mdx.frontmatter.date
  const body = data.mdx.body
  console.log(pageContext.previous.node.frontmatter.title)
  console.log(pageContext.next)
  const lastTitle = pageContext.previous.node.frontmatter.title
  const last = pageContext.previous.node.fields.slug
  return (
    <Layout>
      <h1 className="text-aux text-5xl mt-8 mb-1">{title}</h1>
      <p className="text-xl text-paragraphn">{date}</p>

      <article className="prose">
        <MDXRenderer>{body}</MDXRenderer>
      </article>

      <div className="my-6">
        <Link className="text-2xl text-link" to={last}>
          &larr; {lastTitle}
        </Link>
        {pageContext.next === null ? (
          <div></div>
        ) : (
          <Link to={pageContext.next.node.fields.slug} rel="next">
            {pageContext.next.node.frontmatter.title}
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
