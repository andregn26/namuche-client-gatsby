import React from "react"
import { graphql, Link } from "gatsby"
import PostExcerpt from "../components/magazine/PostExcerpt"
import { WidthCenterContainer } from "../components/HelpersComponents/Containers/WidthCenterContainer"
import MainPostCard from "../components/magazine/MainPostCard"
import { OuterGridPostExcerpt } from "../components/magazine/PostExcerpt.styles"
import { CategoryMenu } from "../components/magazine/PostExcerpt.components"

const magazineTemplate = ({
  data: {
    allWpPost: { edges: articlesArray },
  },
  pageContext: { currentPage, numPages },
}) => {
  // console.log("🚀 ~ file: magazine.js:16 ~ currentPage:", postLink)
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1
      ? "/magazine"
      : `/magazine/${(currentPage - 1).toString()}`
  const nextPage = `/magazine/${(currentPage + 1).toString()}`
  return (
    <WidthCenterContainer style={{ marginTop: "3rem" }}>
      <MainPostCard articlesArray={articlesArray} />
      <CategoryMenu />
      <OuterGridPostExcerpt>
        <PostExcerpt
          articlesArray={articlesArray}
          isRender={true}
          width={6}
          minHeight="35rem"
          numOfIndex={1}
        />
        {!isFirst && (
          <Link to={prevPage} rel="prev">
            ← Previous Page
          </Link>
        )}
        {!isLast && (
          <Link to={nextPage} rel="next">
            Next Page →
          </Link>
        )}
      </OuterGridPostExcerpt>
    </WidthCenterContainer>
  )
}

export default magazineTemplate

export const allPostsQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    wp {
      readingSettings {
        postsPerPage
        pageForPosts
      }
    }
    allWpPost(sort: { date: DESC }, skip: $skip, limit: $limit) {
      edges {
        node {
          link
          slug
          id
          date(formatString: "DD-MM-YYYY")
          categories {
            nodes {
              name
              link
              slug
            }
          }
          acfBlogPosts {
            postTitle
            postExcerpt
            postContent
            postImage {
              id
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
                }
              }
            }
          }
        }
      }
    }
  }
`
