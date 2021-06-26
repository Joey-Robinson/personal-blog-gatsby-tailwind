const PostBody = ({ content }) => {
  return (
    <>
      <article
        className="prose prose-xl px-4 max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  )
}

export default PostBody
