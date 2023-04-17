import * as React from "react"
// Gatsby
//material Ui
import { CssBaseline, ThemeProvider } from "@mui/material"
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
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
