import React from "react"
import { Box, Typography, useTheme } from "@mui/material"
import { WidthCenterContainer } from "../HelpersComponents/Containers/WidthCenterContainer"
import ImgHero from "./ImgHero"

const Hero = () => {
  const theme = useTheme()
  return (
    <WidthCenterContainer sx={{ mt: "1vh" }}>
      <Box height="85vh">
        <ImgHero>
          <Typography
            className="hero-backgroundImg-inside"
            align="center"
            variant="fs6xl"
            component="h1"
            sx={{
              textShadow: `1px 3px 3px ${theme.palette.primary[300]}`,
            }}
          >
            Making Brands Happen
          </Typography>
        </ImgHero>
      </Box>

      <Typography
        variant="h2"
        component="h2"
        sx={{
          padding: "5rem 30% 10rem 0",
        }}
      >
        Acreditamos nas marcas que são pessoas, trabalham com pessoas e se focam
        em pessoas.
      </Typography>
    </WidthCenterContainer>
  )
}

export default Hero
