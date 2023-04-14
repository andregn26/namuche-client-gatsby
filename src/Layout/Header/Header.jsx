import React from "react"
import { useState } from "react"
import { Box, useMediaQuery } from "@mui/material"
import Navbar from "./Navbar/Navbar"
import Sidebar from "./Sidebar/Sidebar"

const Header = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <Box display={isNonMobile ? null : "block"} width="100%" height="100%">
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="100vw"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </Box>
    </Box>
  )
}

export default Header
