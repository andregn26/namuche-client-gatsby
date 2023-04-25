import React from "react"
import { PostStyledGatsbyImg } from "../../../../HelpersComponents/Wrappers/Wrappers"

const PostCardMedia = ({ article }) => {
  const image =
    article.node.acfBlogPosts.postImage.localFile.childImageSharp
      .gatsbyImageData
  const id = article.node.acfBlogPosts.postImage.id

  return <PostStyledGatsbyImg image={image} alt={`post-image-${id}`} />
}

export default PostCardMedia
