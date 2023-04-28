import React from "react"
//Components Import
import { PostCardMedia, PostCardActions } from "./PostExcerpt.components"
import PostCardContent from "./PostCardContent"
import {
  OuterGridPostExcerpt,
  InnerGridPostExcerpt,
  CardPostExcerpt,
} from "./PostExcerpt.styles"

const PostExcerpt = ({
  articlesArray,
  isRender,
  width,
  minHeight,
  numOfIndex,
}) => {
  return (
    <>
      {articlesArray
        .filter((_, index) => index >= numOfIndex)
        .map(article => (
          <InnerGridPostExcerpt width={width} key={article.node.id}>
            <CardPostExcerpt minHeight={minHeight}>
              <div>
                {isRender ? (
                  <PostCardMedia
                    image={
                      article.node.acfBlogPosts.postImage.localFile
                        .childImageSharp.gatsbyImageData
                    }
                    id={article.node.acfBlogPosts.postImage.id}
                  />
                ) : null}

                <PostCardContent article={article} isRender={isRender} />
              </div>
              <PostCardActions article={article} />
            </CardPostExcerpt>
          </InnerGridPostExcerpt>
        ))}
    </>
  )
}

export default PostExcerpt
