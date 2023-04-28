import React from "react"
import PostExcerpt from "../components/magazine/PostExcerpt"
import { WidthCenterContainer } from "../components/HelpersComponents/Containers/WidthCenterContainer"
import { useAllPostsQuery } from "../hooks/blog/useAllPostsQuery"
import MainPostCard from "../components/magazine/MainPostCard"
import { OuterGridPostExcerpt } from "../components/magazine/PostExcerpt.styles"
import { CategoryMenu } from "../components/magazine/PostExcerpt.components"

const Magazine = () => {
  const {
    allWpPost: { edges: articlesArray },
  } = useAllPostsQuery()
  return (
    <WidthCenterContainer style={{ marginTop: "3rem" }}>
      <MainPostCard articlesArray={articlesArray} />
      <CategoryMenu />
      <OuterGridPostExcerpt>
        <PostExcerpt
          articlesArray={articlesArray}
          isRender={true}
          width={6}
          minHeight="35rem"
          numOfIndex={1}
        />
      </OuterGridPostExcerpt>
    </WidthCenterContainer>
  )
}

export default Magazine
