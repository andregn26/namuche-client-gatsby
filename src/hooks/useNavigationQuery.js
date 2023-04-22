import { graphql, useStaticQuery } from "gatsby"

export const useNavigationQuery = () => {
  const data = useStaticQuery(graphql`
query navigation {
    wpMenu(name: {eq: "navbar"}) {
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


