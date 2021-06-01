import React from "react"
import styled, { css, keyframes } from "styled-components"

const btnRotate = keyframes`
0% {
  transform: rotateZ(0)
}
50% {
  transform: rotateZ(180deg)
}
100% {
  transform: rotateZ(0)
}
`

const StyledButton = styled.button`
  font-size: 20px;
  padding: 10px 15px;
  align-self: ${({ align }) => align || "stretch"};
  color: ${props => props.color || props.theme.colors.primary};
  background: transparent;
  &:hover {
    cursor: pointer;
    animation: ${btnRotate} 1s infinite linear;
  }
  &:focus {
    outline: none;
  }

  ${props =>
    props.outlined &&
    css`
      color: ${({ color }) => color || "white"};
      border: 1px solid ${({ color }) => color || "white"};
      background: transparent;
    `}
`
const LargeButton = styled(StyledButton)`
  font-size: 32px;
`
export default function Button(props) {
  return <StyledButton {...props} />
}
