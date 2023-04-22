import React from "react"
import { Link } from "gatsby"
import { FlexBetween } from "../HelpersComponents/Flex/Flex"
import { Box, useTheme, useMediaQuery, Typography } from "@mui/material"
import { NavigationWrapper } from "./Navigation.styles"

const Navigation = ({ menu }) => {
  const theme = useTheme()
  const isNonMobile1000 = useMediaQuery("(min-width: 1000px)")

  return (
    <FlexBetween>
      <NavigationWrapper>
        {/* <Box
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
          {menu.map(mainItem =>
            !mainItem.parentId ? (
              <Typography key={mainItem.id}>
                <Link to={mainItem.url} activeClassName="nav-active">
                  {mainItem.label}
                  {mainItem.childItems.nodes.length !== 0 && <div>&#8964;</div>}
                </Link>
                {mainItem.childItems.nodes.length !== 0 ? (
                  <ul>
                    {mainItem.childItems.nodes.map(childItem => (
                      <li key={childItem.id}>
                        <Link to={childItem.url} activeClassName="nav-active">
                          {childItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Typography>
            ) : null
          )}
        </Box> */}
        <ul>
          {menu.map(mainItem =>
            !mainItem.parentId ? (
              <li key={mainItem.id}>
                <Link to={mainItem.url} activeClassName="nav-active">
                  {mainItem.label}
                  {mainItem.childItems.nodes.length !== 0 && <div>&#8964;</div>}
                </Link>
                {mainItem.childItems.nodes.length !== 0 ? (
                  <ul>
                    {mainItem.childItems.nodes.map(childItem => (
                      <li key={childItem.id}>
                        <Link to={childItem.url} activeClassName="nav-active">
                          {childItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ) : null
          )}
        </ul>
      </NavigationWrapper>
    </FlexBetween>
  )
}

export default Navigation

{
  /* <FlexBetween>
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
</FlexBetween> */
}
