import React from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"

export default function TasksList({ tasks, removeNote }) {
  return (
    <TransitionGroup component="ul" className="list-group">
      {tasks.map(task => (
        <CSSTransition key={task.key} timeout={800} classNames={"note"}>
          <li className="list-group-item task">
            <div className="text">
              {task.id} <b>{task.title}</b>
            </div>
            <button
              onClick={() => removeNote(task.key)}
              className="btn btn-outline-danger btn-sm"
            >
              &times;
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
}
