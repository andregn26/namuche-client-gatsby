import React from "react"
import { PostStyledGatsbyImg } from "../HelpersComponents/Wrappers/Wrappers"
import { Chip, Grid, CardActions, Button, Box, Typography } from "@mui/material"
import { Link } from "gatsby"
import { useCategoryMenu } from "../../hooks/useBlogHooks"

export const PostCardMedia = ({ image, id }) => (
  <PostStyledGatsbyImg image={image} alt={`post-image-${id}`} />
)

export const PostCardCategories = ({ article }) => {
  const categoriesArray = article.node.categories.nodes

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
                (category.name === "Web" && "info") ||
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

export const PostCardActions = ({ article }) => {
  return (
    <CardActions sx={{ padding: "2rem 2rem" }}>
      <Link to={article.node.slug}>
        <Button size="small" color="primary">
          Ler Mais...
        </Button>
      </Link>
    </CardActions>
  )
}

export const CategoryMenu = () => {
  const {
    allWpCategory: { nodes: categoriesArray },
  } = useCategoryMenu()
  return (
    <Box sx={{ mb: "2rem" }}>
      {categoriesArray
        .filter(category => category.count !== null)
        .map(category => (
          <Typography key={category.id}>{category.name}</Typography>
        ))}
    </Box>
  )
}
