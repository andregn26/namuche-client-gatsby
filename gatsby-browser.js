/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it



import React from "react"
import Layout from "./src/Layout/Layout"
export function wrapPageElement({ element, props }) {
    return <Layout {...props}>{element}</Layout>
}
