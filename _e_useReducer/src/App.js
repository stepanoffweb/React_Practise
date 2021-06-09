import React from "react"
import { useState } from "react"

import "./App.css"

export default function App() {
  const [count, setState] = useState(0)

  const increment = () => {
    setState(prevState => (prevState += 1))
  }
  const decrement = () => {
    setState(prevState => (prevState -= 1))
  }
  return (
    <>
      <button onClick={increment}>+</button>
      {<span>{count}</span>}
      <button onClick={decrement}>-</button>
    </>
  )
}
