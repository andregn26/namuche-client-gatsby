import { graphql, useStaticQuery } from "gatsby"

export const usePostExcerptQuery = () => {
  const data = useStaticQuery(graphql`
query usePostExcerptQuery {
  allWpPost(sort: {date: DESC}) {
    edges {
      node {
        id
        date(formatString: "DD/MM/YYYY")
        title
        excerpt
        slug
        uri
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