import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import useScrollTrigger from "@mui/material/useScrollTrigger"
import WidthCenterContainer from "../../../components/HelpersComponents/Containers/WidthCenterContainer"
import MainMenu from "../MainMenu/MainMenu"
import Navigation from "../../../components/Navigation/Navigation"
import { Box, useMediaQuery } from "@mui/material"
import { Menu as MenuIcon } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import NamucheLogo from "../../../assets/img/logo.png"
import { useTheme } from "@mui/material"
import { CssBaseline } from "@mui/material"

function ElevationScroll(props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

export default function ElevateAppBar({
  isSidebarOpen,
  setIsSidebarOpen,
  isTopOfPage,
  props,
}) {
  const isNonMobile1000 = useMediaQuery("(min-width: 1000px)")
  const theme = useTheme()
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <WidthCenterContainer>
            <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
              <Box sx={{ maxWidth: "7rem", margin: "2rem" }}>
                <img src={NamucheLogo} alt="namuche-logo" />
              </Box>

              {isNonMobile1000 && <Navigation />}
              {!isNonMobile1000 && (
                <IconButton
                  aria-label="menu-button"
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                  <MenuIcon
                    sx={{
                      fontSize: "25px",
                    }}
                  />
                </IconButton>
              )}
            </Toolbar>
          </WidthCenterContainer>
        </AppBar>
      </ElevationScroll>

      <Toolbar />
    </React.Fragment>
  )
}
