import { graphql, useStaticQuery } from "gatsby"

export const useCategoryMenu = () => {
  const data = useStaticQuery(graphql`
    query {
      allWpCategory {
        nodes {
          id
          count
          description
          name
          slug
        }
      }
    }
  `)

  return data
}
