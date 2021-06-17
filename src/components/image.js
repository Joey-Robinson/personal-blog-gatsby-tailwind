// import { graphql, StaticQuery } from "gatsby"
// import Img from "gatsby-image"
// import React from "react"

// // Note: You can change "images" to whatever you'd like.

// const ReusableImage = (props, { href, alt, fluid }) => (
//   <StaticQuery
//     query={graphql`
//       query {
//         images: allFile {
//           edges {
//             node {
//               relativePath
//               name
//               childImageSharp {
//                 fluid(maxWidth: 600) {
//                   ...GatsbyImageSharpFluid
//                   src
//                   srcSet
//                   srcSetWebp
//                   srcWebp
//                   originalImg
//                 }
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={(data) => {
//       const image = data.images.edges.find((n) => {
//         return n.node.relativePath.includes(props.filename)
//       })
//       if (!image) {
//         return null
//       }

//       //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
//       return (
//         <a href={href}>
//           <Img alt={alt} fluid={fluid} />
//         </a>
//       )
//     }}
//   />
// )

// export default ReusableImage
