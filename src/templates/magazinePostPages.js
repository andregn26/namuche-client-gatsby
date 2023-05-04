import React from "react"
import { Link, graphql } from "gatsby"
import { WidthCenterContainer } from "../components/HelpersComponents/Containers/WidthCenterContainer"
import { Stack, Pagination, PaginationItem } from "@mui/material"
import PostExcerpt from "../components/magazine/PostExcerpt"
import { OuterGridPostExcerpt } from "../components/magazine/PostExcerpt.styles"
import { CategoryMenu } from "../components/magazine/PostExcerpt.components"

const magazinePostPagesTemplate = () => {
  return (
    <WidthCenterContainer
      style={{ marginTop: "3rem", marginBottom: "3rem" }}
    ></WidthCenterContainer>
  )
}

export default magazinePostPagesTemplate
