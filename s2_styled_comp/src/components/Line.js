import React from "react"
import styled from "styled-components"

const StyledLine = styled.div.attrs(props => ({
  fz: "24px",
}))`
  color: ${props => props.color || props.theme.colors.primary};
  font-size: ${props => props.fz || props.theme.fz.big};
  @media ${props => props.theme.media.phone} {
    font-size: 14px;
  }
  @media ${props => props.theme.media.tablet} {
    font-size: 18px;
  }
`

export default function Line(props) {
  return <StyledLine {...props} />
}
