// import { memo } from "react"
// import Image from "next/image"
import Link from "next/link"

const PostPreview = ({ title, path, date, tags, excerpt }) => {
  // const shortenedExcerpt = excerpt.slice(0, 150)
  return (
    // Play with MT
    <li
      key={path}
      className="mb-10 mt-5 bg-secondary rounded-md mb:w-11/12 xl:w-full"
    >
      <h3 className="text-2xl text-link font-medium smp:px-4 smp:pt-2 px-8 pt-4">
        <Link key={path} href={path}>
          <a>{title}</a>
        </Link>
      </h3>
      <div className="my-1 text-aux smp:px-4 px-8 py-1">{date}</div>
      <p className="text-xl smp:px-4 smp:pb-2 px-8 pb-4">{excerpt}</p>
      <ul className="flex flex-wrap justify-start pt-2 pb-3">{tags}</ul>
    </li>
  )
}

export default PostPreview
