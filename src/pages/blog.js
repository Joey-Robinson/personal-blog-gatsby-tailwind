import { graphql } from "gatsby"
import React from "react"
import BlogPreview from "../components/blog/blog.preview"
import Layout from "../components/global/global.layout"
import SEO from "../components/seo"

export default function Home({ data, location }) {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const siteDescription = data.site.siteMetadata.description
  const posts = data.allMdx.edges

  return (
    <Layout>
      <SEO title={siteTitle} description={siteDescription} />
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
        Blog
      </h1>
      <ul className="list-none mt-8 mb-12">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title
          const image = node.frontmatter.cover.childImageSharp.fluid
          const url = node.frontmatter.cover.publicURL
          const date = node.frontmatter.date
          const description = node.frontmatter.description
          const slug = node.fields.slug
          return (
            <>
              <BlogPreview
                to={slug}
                title={title}
                date={date}
                description={description}
                src={image}
                alt={title}
                url={url}
              />
            </>
          )
        })}
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            cover {
              publicURL
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                  src
                  srcSet
                  srcSetWebp
                  srcWebp
                  originalImg
                }
              }
            }
          }
        }
      }
    }
  }
`
