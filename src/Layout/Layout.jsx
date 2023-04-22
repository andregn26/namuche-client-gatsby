import * as React from "react"
// Gatsby
//material Ui
import { CssBaseline, ThemeProvider } from "@mui/material"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import themeSettings from "../theme"
// Components
import Header from "./Header/Header"
import "../index.css"
import Footer from "./Footer/Footer"

const Layout = ({ children }) => {
  const theme = themeSettings
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StyledThemeProvider theme={theme}>
          <Header />
          {children}
          <Footer />
        </StyledThemeProvider>
      </ThemeProvider>
    </>
  )
}

export default Layout
