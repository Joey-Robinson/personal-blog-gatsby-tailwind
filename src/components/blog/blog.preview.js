import Link from "next/link"
import { memo } from "react"
import CoverImage from "./blog.coverimage"
import Date from "./blog.date"

const PostPreview = memo(
  ({ specialKey, tags, title, coverImage, date, excerpt, slug }) => {
    const shortenedExcerpt = excerpt.slice(0, 150)
    return (
      <li style={{ width: "800px" }} key={specialKey} className="preview">
        <h2 className="text-xl font-bold">
          <Link as={`/blog/${slug}`} href="/blog/[slug]">
            <a>{title}</a>
          </Link>
        </h2>
        <div className="preview--date text-xl font-bold">
          <Date dateString={date} />
        </div>
        <div className="preview--image">
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
        <div className="preview--excerpt text-secondary">
          <p>{shortenedExcerpt}</p>
        </div>
        <div className="preview--tags mt-3 flex">{tags}</div>
      </li>
    )
  }
)

export default PostPreview
