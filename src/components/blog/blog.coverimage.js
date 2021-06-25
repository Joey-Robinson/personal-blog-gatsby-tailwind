import Image from "next/image"
import Link from "next/link"

const CoverImage = ({ title, src, slug }) => {
  return (
    <>
      {slug ? (
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a aria-label={title}>
            <Image
              width={700}
              height={460}
              layout="responsive"
              src={src}
              alt={`Cover Image for ${title}`}
            />
          </a>
        </Link>
      ) : (
        image
      )}
    </>
  )
}

export default CoverImage
