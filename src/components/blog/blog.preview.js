import Link from "next/link"
// import { memo } from "react"
import CoverImage from "./blog.coverimage"
import Date from "./blog.date"

const PostPreview = ({
  specialKey,
  tags,
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) => {
  const shortenedExcerpt = excerpt.slice(0, 150)
  return (
    <li key={specialKey} className="preview">
      <h2 className="preview--heading">
        <Link as={`/blog/${slug}/`} href="/blog/[slug]/">
          <a className="underline">{title}</a>
        </Link>
      </h2>
      <div className="preview--date">
        <Date dateString={date} />
      </div>
      <div className="preview--image">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="preview--excerpt">
        <p>{shortenedExcerpt}</p>
      </div>
      <div className="preview--tags">{tags}</div>
    </li>
  )
}

export default PostPreview
