import * as React from "react"
import { useSiteMetadata } from "../../hooks/useSiteMetadata"

const Seo = ({ title }) => {
  const data = useSiteMetadata()
  console.log(data)
  return (
    <title>
      {title} | {data.title}
    </title>
  )
}

export default Seo
