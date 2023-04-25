import React from "react"
import { useAllPostsQuery } from "../../../../hooks/blog/useAllPostsQuery"
//MUI Imports
import { Box, Grid, Card } from "@mui/material"
//Components Import
import MainPostCard from "../MainPostExcerpt/MainPostCard"
import PostCardMedia from "./Components/PostCardMedia"
import PostCardContent from "./Components/PostCardContent"
import PostCardActions from "./Components/PostCardActions"
import PostCardCategories from "./Components/PostCardCategories"

const PostExcerpt = () => {
  const {
    allWpPost: { edges: articlesArray },
  } = useAllPostsQuery()

  return (
    <>
      <MainPostCard articlesArray={articlesArray} />
      <Grid container spacing={6}>
        {articlesArray
          .filter((item, index) => index >= 1)
          .map(article => (
            <Grid item xs={12} md={6} key={article.node.id}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "30rem",
                }}
              >
                <Box>
                  <PostCardMedia article={article} />
                  <PostCardCategories article={article} />
                  <PostCardContent article={article} />
                </Box>
                <PostCardActions article={article} />
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  )
}

export default PostExcerpt
