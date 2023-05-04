const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  /* -------------------------------------------------------------------------- */
  /*                                    Query                                   */
  /* -------------------------------------------------------------------------- */
  const result = await graphql(`
    {
      wp {
        readingSettings {
          postsPerPage
          pageForPosts
        }
      }
      wpPage(databaseId: { eq: 111334 }) {
        slug
        link
      }
      allWpCategory {
        edges {
          node {
            id
            count
            name
            uri
            link
            slug
          }
        }
      }
      allWpPost {
        edges {
          node {
            id
            uri
            link
            slug
            acfBlogPosts {
              postContent
              postExcerpt
              postTitle
              postImage {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      layout: CONSTRAINED
                      placeholder: BLURRED
                      transformOptions: { fit: COVER }
                    )
                  }
                }
              }
            }
          }
        }
        totalCount
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Alguma coisa correu mal", result.errors)
    return
  }
  /* -------------------------------------------------------------------------- */
  /*                           Variables and Constants                          */
  /* -------------------------------------------------------------------------- */
  const { wp, wpPage, allWpCategory, allWpPost } = result.data
  const allPostsArray = allWpPost.edges
  const allCategoriesArray = allWpCategory.edges
  /* -------------------------------------------------------------------------- */
  /*               Magazine Main Page - Page with the post excerpt              */
  /* -------------------------------------------------------------------------- */
  allPostsArray.forEach(post => {
    const postsPerPage = wp.readingSettings.postsPerPage
    const numberOfPosts = allWpPost.totalCount
    const numPages = Math.ceil(numberOfPosts / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/magazine` : `/magazine/${i + 1}`,
        component: path.resolve("./src/templates/magazineMainPages.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })

  /* -------------------------------------------------------------------------- */
  /*                              Single Post Page                              */
  /* -------------------------------------------------------------------------- */
  allPostsArray.forEach(post => {
    createPage({
      path: `magazine/artigo/${post.node.slug}`,
      component: path.resolve("./src/templates/magazinePostPages.js"),
    })
  })

  /* -------------------------------------------------------------------------- */
  /*                           Pages for each category                          */
  /* -------------------------------------------------------------------------- */
  allCategoriesArray.forEach(category => {
    /* --------------------------------- consts --------------------------------- */
    const numberOfPosts = category.node.count
    const nameOfPosts = category.node.name
    // Some Categories may be empty and we don't want to create pages for that
    // Also don't want tho create pages for uncategorized posts
    if (numberOfPosts > 0 || nameOfPosts !== "uncategorized") {
      createPage({
        path: `/magazine/categoria/${category.node.slug}`,
        component: path.resolve("./src/templates/magazineCategoryPages.js"),
        context: {
          catId: category.node.id,
          catName: category.node.name,
          catUri: category.node.uri,
          catSlug: category.node.slug,
          categories: allWpCategory,
        },
      })
    }
  })
}
