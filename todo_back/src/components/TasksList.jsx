import React from "react"

export default function TasksList({ tasks }) {
  //   console.log("tasks:", tasks)

  return (
    <ul className="list-group">
      {tasks.map(task => (
        <li key={task.id} className="list-group-item task">
          <div className="text">
            {new Date().toLocaleString()} <b>{task.name}</b>
          </div>
          <button className="btn btn-outline-danger btn-sm">&times;</button>
        </li>
      ))}
    </ul>
  )
}
