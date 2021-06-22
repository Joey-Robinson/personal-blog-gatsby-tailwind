import { Link } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const BlogPreview = ({ to, title, alt, date, description, src, url }) => {
  return (
    <li className="my-10" key={date}>
      <h3 className="text-2xl text-link font-medium mb:pl-4 mb:pr-4">
        <Link to={to}>{title} &rarr;</Link>
      </h3>
      <p className="my-1 text-aux mb:pl-4 mb:pr-4">{date}</p>
      <div className="mt-2 mb-2 mb:pl-4 mb:pr-4 ">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Img fluid={src} alt={alt} />
        </a>
      </div>
      <p className="text-lg text-paragraph mb:pl-4 mb:pr-4 ">{description}</p>
    </li>
  )
}

export default BlogPreview
