import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query useSiteMetadata {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return data.site.siteMetadata
}
