// import { memo } from "react"
// import Image from "next/image"
import Link from "next/link"

const PostPreview = ({ title, path, date, image, tags, excerpt }) => {
  // const shortenedExcerpt = excerpt.slice(0, 150)
  return (
    // Play with MT
    <li key={path} className="mb-10 mt-5 bg-secondary rounded-md">
      <h3 className="text-2xl text-link font-medium px-8 pt-4">
        <Link key={path} href={path}>
          <a>{title}</a>
        </Link>
      </h3>
      <div className="my-1 text-aux px-8">{date}</div>
      <p className="text-xl px-8 pb-4">{excerpt}</p>
      <ul className="flex flex-wrap justify-evenly smp:justify-start px-4 pb-3">
        {tags}
      </ul>
    </li>
  )
}

export default PostPreview
