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
    <li key={specialKey} className="listing">
      <h2 className="listing--heading">
        <Link as={`/blog/${slug}/`} href="/blog/[slug]/">
          <a className="underline">{title}</a>
        </Link>
      </h2>
      <p className="listing--date">
        <Date dateString={date} />
      </p>
      <div className="listing--image">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <p className="listing--excerpt">{shortenedExcerpt}</p>
      <ul className="listing--tags">{tags}</ul>
    </li>
  )
}

export default PostPreview
