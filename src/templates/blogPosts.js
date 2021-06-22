import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "../components/global/global.layout"

const blogPosts = ({ data, pageContext }) => {
  const title = data.mdx.frontmatter.title
  const date = data.mdx.frontmatter.date
  const body = data.mdx.body

  // Links to Previous || Next blog post
  const lastTitle = pageContext.previous.node.frontmatter.title
  const last = pageContext.previous.node.fields.slug
  return (
    <Layout>
      <h1 className="text-secondaryLink text-5xl font-semibold xfl:pl-4 xfl:pr-4 xfl:mt-6">
        {title}
      </h1>
      <p className="text-xl text-secondary mb:pl-5 mb:pr-4 mb:mt-3">{date}</p>

      <article className="prose">
        <MDXRenderer>{body}</MDXRenderer>
      </article>

      <div className="flex justify-between my-6 mb:mx-4">
        {pageContext.previous === null ? (
          <div></div>
        ) : (
          <div>
            <Link
              className="text-xl text-link mb:text-sm xxl:text-xl"
              to={last}
              rel="previous"
            >
              &larr; {lastTitle}
            </Link>
          </div>
        )}
        {pageContext.next === null ? (
          <div></div>
        ) : (
          // The Next Link needs to be drilled down or Gatsby throws
          // An error of pageContext.next is null, even defining as a variable
          <div>
            <Link
              className="text-xl text-link mb:text-sm xxl:text-xl"
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
