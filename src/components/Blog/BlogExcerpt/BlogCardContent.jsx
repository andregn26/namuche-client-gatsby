import { CardContent, Typography } from "@mui/material"
import React from "react"

const BlogCardContent = ({ article }) => {
  return (
    <>
      <CardContent sx={{ flex: 1 }}>
        <Typography gutterBottom variant="h6" component="h2">
          {article.node.title}
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          {article.node.date}
        </Typography>
        <Typography
          variant="body2"
          dangerouslySetInnerHTML={{ __html: article.node.excerpt }}
        />
      </CardContent>
    </>
  )
}

export default BlogCardContent

{
  /* <CardContent sx={{ flex: 1 }}>
<Typography gutterBottom variant="h6" component="h2">
  {article.node.title}
</Typography>
<Typography gutterBottom variant="subtitle1">
  {article.node.date}
</Typography>
<Typography
  variant="body2"
  dangerouslySetInnerHTML={{ __html: article.node.excerpt }}
/>{" "}
<CardActions>
  <Button size="small" color="primary">
    Ler Mais...
  </Button>
</CardActions>
</CardContent> */
}
