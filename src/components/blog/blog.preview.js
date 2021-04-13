import Link from "next/link"
import { memo } from "react"
import CoverImage from "./blog.coverimage"
import Date from "./blog.date"

const PostPreview = memo(
  ({ specialKey, tags, title, coverImage, date, excerpt, slug }) => {
    const shortenedExcerpt = excerpt.slice(0, 150)
    return (
      <li style={{ width: "800px" }} key={specialKey} className="blog--li news">
        <h2>
          <Link as={`/blog/${slug}`} href="/blog/[slug]">
            <a>{title}</a>
          </Link>
        </h2>
        <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
          <Date dateString={date} />
        </div>
        <div className="news--image">
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
        <div className="news--excerpt">
          <p>{shortenedExcerpt}</p>
        </div>
        <div>{tags}</div>
      </li>
    )
  }
)

export default PostPreview
