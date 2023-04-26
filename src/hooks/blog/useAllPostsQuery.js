import { graphql, useStaticQuery } from "gatsby"

export const useAllPostsQuery = () => {
  const data = useStaticQuery(graphql`
query allPostsQuery {
  allWpPost(sort: {date: DESC}) {
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
`)

  return data
}