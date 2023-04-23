import React from "react"
import { usePostExcerptQuery } from "../../../hooks/usePostExcerptQuery"
//MUI Imports
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import { Button, CardActionArea, CardActions, Grid } from "@mui/material"
import { Box, Typography } from "@mui/material"
import { WidthCenterContainer } from "../../HelpersComponents/Containers/WidthCenterContainer"
import BlogCardContent from "./BlogCardContent"
import BlogCardMedia from "./BlogCardMedia"
import BlogCardActions from "./BlogCardActions"
import BlogMainCard from "./BlogMainCard"

const BlogExcerpt = () => {
  const { edges: articles } = usePostExcerptQuery()

  return (
    <>
      <BlogMainCard articles={articles} />
      <Grid container spacing={6}>
        {articles
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
                  <BlogCardMedia article={article} />
                  <BlogCardContent article={article} />
                </Box>
                <BlogCardActions article={article} />
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  )
}

export default BlogExcerpt

{
  /* <Grid item xs={12} md={6} key={article.node.id}>
              <Card sx={{ display: "flex", minHeight: "25rem" }}>
                <CardContent sx={{ flex: 1 }}>
                  <Typography gutterBottom variant="h6" component="h2">
                    {article.node.title}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1">
                    {article.node.date}
                  </Typography>
                  <Typography
                    variant="body2"
                    dangerouslySetInnerHTML={{ __html: article.node.excerpt }}
                  />{" "}
                  <CardActions>
                    <Button size="small" color="primary">
                      Ler Mais...
                    </Button>
                  </CardActions>
                </CardContent>

                <CardMedia
                  sx={{
                    width: "10rem",

                    display: { xs: "none", sm: "block" },
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  component="img"
                  image={
                    article.node.featuredImage.node.localFile.childImageSharp
                      .gatsbyImageData.images.fallback.src
                  }
                  alt="green iguana"
                />
              </Card>
            </Grid> */
}
