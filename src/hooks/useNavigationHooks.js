import { graphql, useStaticQuery } from "gatsby"

export const useMainMenu = () => {
  const data = useStaticQuery(graphql`
    query useMainMenuQuery {
      wpMenu(name: { eq: "navbar" }) {
        menuItems {
          nodes {
            url
            label
            parentId
            id
            childItems {
              nodes {
                id
                label
                url
              }
            }
          }
        }
      }
    }
  `)

  return data
}
