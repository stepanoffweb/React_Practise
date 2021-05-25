import React from "react"
import ReactDOM from "react-dom"
import styled, { createGlobalStyle } from "styled-components"
import App from "./App"

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`
ReactDOM.render(
  <>
    <Global />
    <App />
  </>,
  document.getElementById("root")
)
