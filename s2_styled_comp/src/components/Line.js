import React from "react"
import styled from "styled-components"

const StyledLine = styled.div`
  color: ${({ color }) => color || "white"};
`

export default function Line(props) {
  return <StyledLine {...props} />
}
