import React from "react"
import styled, { css } from "styled-components"

const StyledButton = styled.button`
  font-size: 20px;
  padding: 10px 15px;
  align-self: ${({ align }) => align || "stretch"};
  &:hover {
    cursor: pointer;
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
