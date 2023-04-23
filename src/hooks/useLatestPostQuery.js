import { graphql, useStaticQuery } from "gatsby"

export const useLatestPostQuery = () => {
    const data = useStaticQuery(graphql`
query {
  allWpPost(limit: 1, sort: {date: DESC}) {
    nodes {
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
}
  `)

    return data
}