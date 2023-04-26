import * as React from "react"
// Gatsby
//material Ui
import { Box, CssBaseline, ThemeProvider } from "@mui/material"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import themeSettings from "../theme"
// Components
import Header from "./Header/Header"
import "../index.css"
import Footer from "./Footer/Footer"
// import AnimatedCursor from "react-animated-cursor"

const Layout = ({ children }) => {
  const theme = themeSettings
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StyledThemeProvider theme={theme}>
          <Header />{" "}
          {/* <AnimatedCursor
            innerSize={10}
            outerSize={30}
            color="255, 46, 99"
            outerAlpha={0.4}
            innerScale={0.6}
            outerScale={0}
          /> */}
          {children}
          <Footer />
        </StyledThemeProvider>
      </ThemeProvider>
    </>
  )
}

export default Layout
