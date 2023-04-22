import React from 'react'
import Layout from '../../Layout/Layout'
import BlogExcerpt from '../../components/Blog/BlogExcerpt/BlogExcerpt'
import { graphql } from 'gatsby'



const PageTemplate = () => {
  return (
    <Layout>
      <BlogExcerpt />
    </Layout>
  )
}

export default PageTemplate


// export const pageQuery = graphql`
// query($id: String!) {
//   wpPage(id: {eq: $id}) {
//     id
//     title
//     content
//     status
//     featuredImage {
//       node {
//         id
//         localFile {
//           childImageSharp {
//             gatsbyImageData(placeholder: BLURRED)
//           }
//         }
//       }
//     }
//     wpChildren {
//       nodes {
//         ... on WpPage {
//           id
//           uri
//           title
//         }
//       }
//     }
//     wpParent {
//       node {
//         ... on WpPage {
//           id
//           uri
//           title
//           wpChildren {
//             nodes {
//               ... on WpPage {
//                 id
//                 title
//                 uri
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
// `