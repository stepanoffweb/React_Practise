import React from "react"
import ReactDOM from "react-dom"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import App from "./App"

const myTheme = {
  colors: {
    primary: "green",
    secondary: "red",
  },
  fz: {
    big: "32px",
    normal: "24px",
  },
  media: {
    phone: "(max-width: 425px)",
    tablet: "(max-width: 768px) and (min-width: 426px)",
  },
}

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`
ReactDOM.render(
  <ThemeProvider theme={myTheme}>
    <Global />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
)
