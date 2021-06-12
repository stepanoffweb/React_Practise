import React from "react"
import Form from "../components/Form"
import TasksList from "../components/TasksList"

export default function Home() {
  const tasks = new Array(4).fill("").map((item, i) => ({
    id: new Date().getMilliseconds() + i,
    name: "Task " + (i + 1),
  }))
  //   console.log("tasks:", tasks)
  return (
    <div>
      <h1>Home</h1>
      <Form />
      <hr />
      <TasksList tasks={tasks} />
    </div>
  )
}
