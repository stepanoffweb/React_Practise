import React, { useState } from "react"
import { useReducer } from "react"
import "./App.css"
import Todo from "./Todo"

export const ACTIONS = {
  ADD_TODO: "add todo",
  DELETE_TODO: "delete todo",
  TOGGLE: "complete todo",
}

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE:
      return todos.map(
        todo =>
          todo.id === action.payload.id && {
            ...todo,
            completed: !todo.completed,
          }
      )

    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
  }
}
function newTodo(text) {
  return { id: new Date().toLocaleString(), name: text, completed: false }
}
export default function App() {
  const [text, setValue] = useState("")
  const [todos, dispatch] = useReducer(reducer, [])

  // console.log("todos:", todos)

  const handleSubmit = e => {
    // console.log("text:", text)
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: text } })
    setValue("")
  }

  const handleChange = e => {
    setValue(e.target.value)
  }
  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
      </form>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  )
}
