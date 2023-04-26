import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const StyledGatsbyImg = styled(GatsbyImage)`
  width: 100%;
  filter: brightness(60%);
  object-fit: cover;
`

export const Wrapper = styled.div`
  position: relative;
`

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

export const PostStyledGatsbyImg = styled(GatsbyImage)`
  height: 10rem;
  display: block;

  object-fit: cover;
  object-position: center;
`

// sx={{
//   height: "10rem",
//   display: { xs: "none", sm: "block" },
//   objectFit: "cover",
//   objectPosition: "center",
// }}
