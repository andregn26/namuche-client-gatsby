import { CardContent, Typography, useTheme } from "@mui/material"
import React from "react"
import { PostCardCategories } from "./PostExcerpt.components"

const PostCardContent = ({ article, isRender }) => {
  const theme = useTheme()
  const articleDataShortcut = article.node.acfBlogPosts
  return (
    <>
      <CardContent sx={{ flex: 1, padding: "2rem 2rem" }}>
        {isRender ? <PostCardCategories article={article} /> : null}
        <Typography variant="h6" component="h2" fontFamily="Oswald">
          {articleDataShortcut.postTitle}
        </Typography>
        <Typography
          variant="body2"
          my={1}
          fontFamily="Oswald"
          color={theme.palette.grey[600]}
        >
          {article.node.date}
        </Typography>
        <Typography
          variant="body2"
          dangerouslySetInnerHTML={{ __html: articleDataShortcut.postExcerpt }}
        />
      </CardContent>
    </>
  )
}

export default PostCardContent
