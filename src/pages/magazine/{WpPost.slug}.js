import React from 'react'
import BlogExcerpt from '../../components/Blog/BlogExcerpt/BlogExcerpt'



const PageTemplate = () => {
  return (

    <h1>sfdgvsdf</h1>

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