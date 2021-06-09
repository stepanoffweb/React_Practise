import React from "react"
import { useReducer } from "react"

import "./App.css"

const ACTIONS = {
  DECREMENT: "decrement",
  INCREMENT: "increment",
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.DECREMENT:
      return { count: (state.count -= 1) }
    case ACTIONS.INCREMENT:
      return { count: (state.count += 1) }
    default:
      return state
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  const increment = () => {
    console.log("state I:", state)
    dispatch({ type: ACTIONS.INCREMENT })
  }
  const decrement = () => {
    console.log("state D:", state)
    dispatch({ type: ACTIONS.DECREMENT })
  }
  return (
    <>
      <button onClick={increment}>+</button>
      {<span>{state.count}</span>}
      <button onClick={decrement}>-</button>
    </>
  )
}
