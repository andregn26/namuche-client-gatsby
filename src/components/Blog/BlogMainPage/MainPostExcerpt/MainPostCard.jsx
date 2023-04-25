import React from "react"
import { Paper, Box, Grid, Typography, Link, Card } from "@mui/material"
// import { Link } from "gatsby"
import PostCardMedia from "../PostExcerpt/Components/PostCardMedia"

const MainPostCard = ({ articlesArray }) => {
  return (
    <>
      <Grid container spacing={6} mb={6}>
        {articlesArray
          .filter((item, index) => index === 0)
          .map(mainArticle => (
            <Grid item xs={12}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "20rem",
                }}
              >
                <Box>
                  {/* <PostCardMedia article={mainArticle} /> */}
                  {/* <BlogCardContent article={article} /> */}
                </Box>
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  )
}

export default MainPostCard
