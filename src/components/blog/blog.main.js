const PostBody = ({ content }) => {
  return (
    <>
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  )
}

export default PostBody
