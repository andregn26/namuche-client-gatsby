import React from "react"
import { CardActions, Button } from "@mui/material"
import { Link } from "gatsby"

const PostCardActions = ({ article }) => {
  return (
    <CardActions sx={{ padding: "2rem 2rem" }}>
      <Link to={article.node.slug}>
        <Button size="small" color="primary">
          Ler Mais...
        </Button>
      </Link>
    </CardActions>
  )
}

export default PostCardActions
