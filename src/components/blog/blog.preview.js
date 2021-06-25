// import { memo } from "react"
import Link from "next/link"
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
    <li key={specialKey} className="my-10">
      <h3 className="text-2xl text-link font-medium mb:pl-4 mb:pr-4">
        <Link as={`/blog/${slug}/`} href="/blog/[slug]/">
          <a>{title}</a>
        </Link>
      </h3>
      <p className="my-1 text-aux mb:pl-4 mb:pr-4">
        <Date dateString={date} />
      </p>
      <div className="mt-2 mb-2 mb:pl-4 mb:pr-4 ">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <p className="text-lg text-paragraph mb:pl-4 mb:pr-4">
        {shortenedExcerpt}
      </p>
      {/* <ul className="listing--tags">{tags}</ul> */}
    </li>
  )
}

export default PostPreview
