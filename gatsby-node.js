const path = require("path")

/* -------------------------------------------------------------------------- */
/* ANCHOR             Create Category Pages with Pagination                   */
/* -------------------------------------------------------------------------- */

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const archiveTemplate = path.resolve("./src/templates/archive.js")

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
    }
  `)

    if (result.errors) {
        reporter.panicOnBuild("Alguma coisa correu mal", result.errors)
        return
    }

    const { wp, allWpCategory, wpPage } = result.data
    const blogPage = wpPage.slug
    /* create pages for each category */
    allWpCategory.edges.forEach(category => {
        const postsPerPage = wp.readingSettings.postsPerPage
        const numberOfPosts = category.node.count
        const numPages = Math.ceil(numberOfPosts / postsPerPage)

        // Some Categories may be empty and we don't want to create pages for that
        // Also don't want tho create pages for uncategorized posts
        if (numberOfPosts > 0 || category.node.name !== "uncategorized") {
            Array.from({ length: numPages }).forEach((_, i) => {
                createPage({
                    path: i === 0 ? `${blogPage}/${category.node.slug}` : `$${blogPage}/${category.node.slug}${i + 1}`,
                    component: path.resolve("./src/templates/archive.js"),
                    context: {
                        limit: postsPerPage,
                        skip: i * postsPerPage,
                        numPages,
                        currentPage: i + 1,
                        catId: category.node.id,
                        catName: category.node.name,
                        catUri: category.node.uri,
                        categories: allWpCategory,
                    },
                })
            })
        }
    })


}
