import React from "react"
import { ACTIONS } from "./App"

export default function Todo({ todo, dispatch }) {
  console.log("todo:", todo)
  return (
    <div
      className="todo"
      style={{
        backgroundColor: todo.completed ? "#787800" : "#9e9e9e",
        border: "1px solid #343434",
      }}
    >
      <span
        style={{ textDecoration: todo.completed && "line-through" }}
      >{`${todo.id} Task: ${todo.name}`}</span>
      <div className="buttons">
        <button
          style={{
            backgroundColor: todo.completed ? "#80d8ff" : "#cddc39",
          }}
          onClick={() =>
            dispatch({ type: ACTIONS.TOGGLE, payload: { id: todo.id } })
          }
        >
          {todo.completed ? "ToDo" : "Done"}
        </button>
        <button
          id="delete"
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
          }
        >
          Delete
        </button>
      </div>
    </div>
  )
}
