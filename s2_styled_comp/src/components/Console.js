import React, { useState } from "react"
import styled from "styled-components"
import Flex from "./Flex"
import Line from "./Line"

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background: ${({ back }) => back || "black"};
  font-size: ${props => props.fz || props.theme.fz.big};
  color: ${props => props.color || props.theme.colors.primary};
  margin: ${({ margin }) => margin || "0"};
  resize: none;
  border: none;
  &: focus {
    outline: none;
  }
  @media ${props => props.theme.media.phone} {
    font-size: 14px;
  }
  @media ${props => props.theme.media.tablet} {
    font-size: 18px;
  }
`

export default function Console({ ...props }) {
  const [lines, setLines] = useState(["C:/Users/StasWD>"])

  const handleEnter = e => {
    if (e.charCode === 13) {
      setLines(lines => [...lines, "C:/Users/StasWD>"])
    }
  }

  return (
    <Flex>
      <Flex direction="column" margin="0 10px" width="40%">
        {lines.map((line, i) => (
          <Line key={i}>{line}</Line>
        ))}
      </Flex>
      <StyledConsole onKeyPress={handleEnter} {...props} />
    </Flex>
  )
}
