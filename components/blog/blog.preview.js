// import { memo } from "react"
import Image from "next/image"
import Link from "next/link"

const PostPreview = ({ title, path, date, image, tags, excerpt }) => {
  // const shortenedExcerpt = excerpt.slice(0, 150)
  return (
    // Play with MT
    <li className="mb-10 mt-5">
      <h3 className="text-2xl text-link font-medium mb:pl-4 mb:pr-4">
        <Link key={path} href={path}>
          <a>{title}</a>
        </Link>
      </h3>
      <div className="my-1 text-aux mb:pl-4 mb:pr-4">{date}</div>
      <ul className="flex flex-wrap justify-evenly smp:justify-start ">
        {tags}
      </ul>
      <div className="mt-2 mb-2 mb:pl-4 mb:pr-4 ">
        <Image
          src={image}
          quality="100"
          width={800}
          height={500}
          layout="responsive"
          alt={`Thumb for ${title}`}
        />
      </div>
      <p className="text-xl text-paragraph mb:pl-4 mb:pr-4">{excerpt}</p>
    </li>
  )
}

export default PostPreview
