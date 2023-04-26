import React from "react"
import { Box, Chip, Grid } from "@mui/material"

const PostCardCategories = ({ article }) => {
  const categoriesArray = article.node.categories.nodes
  console.log(
    "🚀 ~ file: PostCardCategories.jsx:7 ~ PostCardCategories ~ categoriesArray:",
    categoriesArray
  )

  return (
    <>
      <Grid container spacing={1} mb={3}>
        {categoriesArray.map((category, index) => (
          <Grid item key={index}>
            <Chip
              sx={{ cursor: "pointer" }}
              component="a"
              href={category.slug}
              size="small"
              variant="outlined"
              key={index}
              color={
                (category.name === "web" && "info") ||
                (category.name === "Branding" && "warning") ||
                (category.name === "Estratégia de Marketing" && "primary") ||
                "error"
              }
              label={category.name}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default PostCardCategories
