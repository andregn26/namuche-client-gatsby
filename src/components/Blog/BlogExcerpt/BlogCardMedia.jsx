import React from "react"
import { CardMedia } from "@mui/material"

const BlogCardMedia = ({ article }) => {
  return (
    <CardMedia
      sx={{
        height: "10rem",
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
  )
}

export default BlogCardMedia
