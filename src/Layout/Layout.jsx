import * as React from "react"
// Gatsby
import { Link, useStaticQuery, graphql } from "gatsby"
//material Ui
import {
  CssBaseline,
  useMediaQuery,
  createTheme,
  ThemeProvider,
} from "@mui/material"
import themeSettings from "../theme"
// Components
import Header from "./Header/Header"
import "../index.css"

const Layout = ({ children }) => {
  const theme = themeSettings
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        {children}
      </ThemeProvider>
    </>
  )
}

export default Layout
