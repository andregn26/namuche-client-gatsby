import React from "react"
import { Chip } from "@mui/material"

const PostCardCategories = ({ article }) => {
  const categoriesArray = article.node.categories.nodes
  console.log(
    "🚀 ~ file: PostCardCategories.jsx:7 ~ PostCardCategories ~ categoriesArray:",
    categoriesArray
  )
  return (
    <>
      {categoriesArray.map((category, index) => (
        <Chip key={index} color="success" label={category.name} />
      ))}
    </>
  )
}

export default PostCardCategories
