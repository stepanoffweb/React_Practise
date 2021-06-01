import React, { useState } from "react"
import styled from "styled-components"
import Flex from "./Flex"
import Line from "./Line"

const StyledConsole = styled.textarea`
  width: 80%;
  height: 70vh;
  background: black;
  font-size: 24px;
  color: ${({ color }) => color || "white"};
  margin: ${({ margin }) => margin || "0"};
  resize: none;
  border: 1px solid ${({ color }) => color || "white"};
  &: focus {
    outline: none;
  }
`

export default function Console({ color, ...props }) {
  const [lines, setLines] = useState(["C:/Users/StasWD>"])
  const handleEnter = e => {
    if (e.charCode === 13) {
      setLines(lines => [...lines, "C:/Users/StasWD>"])
    }
  }
  return (
    <Flex>
      <StyledConsole color={color} onKeyPress={handleEnter} {...props} />
      <Flex direction="column">
        {lines.map(line => (
          <Line color={color}>{line}</Line>
        ))}
      </Flex>
    </Flex>
  )
}
