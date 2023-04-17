import React from "react"
import WidthCenterContainer from "../../components/HelpersComponents/Containers/WidthCenterContainer"
import { Box } from "@mui/material"
import FlexBetween from "../../components/HelpersComponents/Flex/FlexBetween"
import SocialIconsGroup from "../SocialIcons/SocialIconsGroup"
import Inovflow from "../../assets/img/inovflow.png"

const Footer = () => {
  return (
    <Box padding={"1rem 0"}>
      <WidthCenterContainer>
        <FlexBetween>
          <Box sx={{ maxWidth: "6rem" }}>
            <img src={Inovflow} alt="inovflow-log" />
          </Box>
          <SocialIconsGroup
            gap="1rem"
            justifyContent="flexBetween"
            iconWidthHeight="1.5rem"
          />
        </FlexBetween>
      </WidthCenterContainer>
    </Box>
  )
}

export default Footer