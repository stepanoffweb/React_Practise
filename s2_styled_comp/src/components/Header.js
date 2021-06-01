import React from "react"
import styled from "styled-components"

const StyledHeader = styled.h1`
  color: ${props => props.color || props.theme.colors.primary};
  padding: 1rem 2rem;
  margin-bottom: 2rem;
`
export default function Header({ children, ...props }) {
  return <StyledHeader {...props}> {children}</StyledHeader>
}
