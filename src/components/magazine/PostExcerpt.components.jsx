import React from "react"
import { PostStyledGatsbyImg } from "../HelpersComponents/Wrappers/Wrappers"
import {
  Chip,
  Grid,
  CardActions,
  ButtonGroup,
  Button,
  Box,
  Card,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material"
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
              href={`categoria/${category.slug}`}
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
      <Link to={`/magazine/artigo/${article.node.slug}`}>
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
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"))
  const isMaxTablet = useMediaQuery(theme.breakpoints.down("md"))
  const isLaptop = useMediaQuery(theme.breakpoints.between("md", "lg"))
  const isDesktop = useMediaQuery(theme.breakpoints.between("lg", "xl"))
  const isLargeDesktop = useMediaQuery(theme.breakpoints.up("xl"))
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", my: "2rem" }}>
        <ButtonGroup
          size="small"
          variant={isMobile ? "outlined" : "text"}
          aria-label="text button group"
          orientation={isMobile ? "vertical" : "horizontal"}
          color="primary"
        >
          {categoriesArray
            .filter(category => category.count !== null)
            .map(category => (
              <Button
                href={`/magazine/categoria/${category.slug}`}
                key={category.id}
              >
                {category.name} ({category.count})
              </Button>
            ))}
        </ButtonGroup>
      </Box>
    </>
  )
}
