import React from "react"
import { Paper, Box, Grid, Typography } from "@mui/material"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useLatestPostQuery } from "../../../hooks/useLatestPostQuery"

const BlogMainCard = () => {
  const { allWpPost: data } = useLatestPostQuery()
  console.log("🚀 ~ file: BlogMainCard.jsx:10 ~ BlogMainCard ~ data:", data)

  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 6,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        // backgroundImage: `url(${mainPostImage})`,
      }}
    >
      {/* Increase the priority of the hero background image */}

      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {/* {post.title} */}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {/* {post.description} */}
            </Typography>
            {/* <Link variant="subtitle1" href="#">
              {post.linkText}
            </Link> */}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default BlogMainCard
