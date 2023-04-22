import React from "react"
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material"
import { ChevronRight } from "@mui/icons-material"
import { FlexBetween } from "../../../components/HelpersComponents/Flex/Flex"
import MainMenu from "../MainMenu/MainMenu"
// import SocialIconsGroup from "../../00Layout/SocialIcons/SocialIconsGroup"

const Sidebar = ({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const theme = useTheme()

  return (
    <>
      <Box component="nav">
        {isSidebarOpen && (
          <Drawer
            open={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            variant="persistent"
            anchor="right"
            sx={{
              width: drawerWidth,
              "& .MuiDrawer-paper": {
                backgroundColor: theme.palette.background.default,
                boxSizing: "border-box",
                borderWidth: isNonMobile ? 0 : "2px",
                width: drawerWidth,
              },
            }}
          >
            <Box
              width="100%"
              height="100%"
              sx={{
                p: "2rem 2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Margins and padding box */}
              {/* Menu Header Box */}
              <FlexBetween>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography
                    variant="h3"
                    fontWeight="bold"
                    fontFamily="var(--ff-heading)"
                  >
                    Menu
                  </Typography>
                </Box>
                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                  <ChevronRight />
                </IconButton>
              </FlexBetween>
              {/* Menu Actions Box */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <MainMenu />
              </Box>
              {/* Menu Footer Box */}{" "}
              <Box>
                <Divider />
                <Box sx={{ margin: "2rem 0" }}>
                  {/* <SocialIconsGroup
                    gap="3rem"
                    justifyContent="center"
                    iconWidthHeight="2rem"
                  /> */}
                </Box>
              </Box>
            </Box>
          </Drawer>
        )}
      </Box>
    </>
  )
}

export default Sidebar
