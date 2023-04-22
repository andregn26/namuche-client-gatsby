import { graphql, useStaticQuery } from "gatsby"

export const usePostExcerptQuery = () => {
  const data = useStaticQuery(graphql`
query usePostExcerptQuery {
    allWpPost {
      edges {
        node {
          id
          title
          date(formatString: "DD/MM/YYYY")
          excerpt
          featuredImage {
            node {
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
  `)

  return data.allWpPost
}