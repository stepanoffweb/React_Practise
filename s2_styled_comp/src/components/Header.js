import React from "react"
import styled from "styled-components"

const StyledHeader = styled.h1`
  color: ${({ color }) => color || "red"};
  padding: 1rem 2rem;
`
export default function Header({ children, ...props }) {
  return <StyledHeader {...props}> {children}</StyledHeader>
}
