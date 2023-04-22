import React from "react"
import { FlexBetween } from "../../../components/HelpersComponents/Flex/Flex"
import { Box, Typography, useTheme } from "@mui/material"
import { useMediaQuery } from "@mui/material"

const menuItems = [
  {
    name: "A Agência",
  },
  {
    name: "Os Serviços",
  },
  {
    name: "Os Trabalhos",
  },
  {
    name: "A Magazine",
  },
  {
    name: "Os Contactos",
  },
]

const MainMenu = () => {
  const theme = useTheme()
  const isNonMobile1000 = useMediaQuery("(min-width: 1000px)")
  return (
    <FlexBetween>
      <Box
        sx={
          isNonMobile1000
            ? { display: "flex", gap: "2rem", padding: "1rem 0" }
            : {
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                alignItems: "center	",
              }
        }
      >
        {menuItems.map((item, index) => (
          <Typography
            key={index}
            gap={1.3}
            variant={isNonMobile1000 ? "body2" : "h3"}
            component="h3"
            fontFamily="var(--ff-heading)"
            sx={
              isNonMobile1000
                ? { textShadow: "none" }
                : {
                    textShadow: `1px 5px 3px ${theme.palette.primary[300]}}`,
                  }
            }
          >
            {item.name}
          </Typography>
        ))}
      </Box>
    </FlexBetween>
  )
}

export default MainMenu
