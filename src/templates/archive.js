import React from "react"
import { Link, graphql } from "gatsby"
import { WidthCenterContainer } from "../components/HelpersComponents/Containers/WidthCenterContainer"
import { Grid, Card, Box, Typography } from "@mui/material"
import PostExcerpt from "../components/magazine/PostExcerpt"
import { OuterGridPostExcerpt } from "../components/magazine/PostExcerpt.styles"
import { CategoryMenu } from "../components/magazine/PostExcerpt.components"

const archiveTemplate = ({
  data: {
    allWpPost: { edges: catPostArray },
  },
}) => {
  return (
    <WidthCenterContainer style={{ marginTop: "3rem", marginBottom: "3rem" }}>
      <CategoryMenu />
      <OuterGridPostExcerpt>
        <PostExcerpt
          articlesArray={catPostArray}
          isRender={false}
          width={12}
          minHeight="10rem"
          numOfIndex={0}
        />
      </OuterGridPostExcerpt>
    </WidthCenterContainer>
  )
}

export default archiveTemplate

export const pageQuery = graphql`
  query ($catId: String!, $skip: Int!, $limit: Int!) {
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { id: { eq: $catId } } } } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          uri
          slug
          date(formatString: "DD-MM-YYYY")
          acfBlogPosts {
            postContent
            postExcerpt
            postTitle
            postImage {
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  }
`
