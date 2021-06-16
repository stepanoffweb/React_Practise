import React, { useContext, useEffect } from "react"
import Form from "../components/Form"
import { Loader } from "../components/Loader"
import TasksList from "../components/TasksList"
import { DatabaseContext } from "../context/database/databaseContext"

export default function Home() {
  // const tasks = new Array(4).fill("").map((item, i) => ({
  //   id: new Date().getMilliseconds() + i,
  //   name: "Task " + (i + 1),
  // }))
  const { fetchBase, removeNote, isLoading, notes } =
    useContext(DatabaseContext)
  useEffect(() => {
    fetchBase()
  }, [])
  return (
    <div>
      <h1>Home</h1>
      <Form />
      <hr />
      {isLoading ? (
        <Loader />
      ) : (
        <TasksList removeNote={removeNote} tasks={notes} />
      )}
    </div>
  )
}
