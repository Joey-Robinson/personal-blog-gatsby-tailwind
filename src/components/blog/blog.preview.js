// import { memo } from "react"
import Image from "next/image"
import Link from "next/link"
import Date from "./blog.date"

const PostPreview = ({
  specialKey,
  tags,
  title,
  image,
  date,
  excerpt,
  slug,
}) => {
  // const shortenedExcerpt = excerpt.slice(0, 150)
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
        <Image
          slug={slug}
          title={title}
          src={image}
          quality="100"
          width={800}
          height={500}
          layout="responsive"
        />
      </div>
      <p className="text-xl text-paragraph mb:pl-4 mb:pr-4">{excerpt}</p>
      {/* <ul className="listing--tags">{tags}</ul> */}
    </li>
  )
}

export default PostPreview
