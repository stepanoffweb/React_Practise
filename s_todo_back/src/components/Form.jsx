import React, { useContext, useState } from "react"
import { AlertContext } from "../context/alert/alertContext"
import { DatabaseContext } from "../context/database/databaseContext"

export default function Form() {
  const [value, setValue] = useState("")
  const alert = useContext(AlertContext)
  const { addNote } = useContext(DatabaseContext)

  const handleSubmit = e => {
    // console.log("value:", value)
    e.preventDefault()
    if (value.trim()) {
      addNote(value.trim())
      alert.show("The note was created", "success")
      setValue("")
    } else {
      alert.show("Fill in the form, please...")
    }
  }

  return (
    <form className="mb-3 form-group" onSubmit={handleSubmit}>
      <label className="form-label">
        Enter Your Task
        <input
          type="text"
          className="form-control"
          placeholder="print, snap it!"
          onChange={e => setValue(e.target.value)}
          value={value}
        />
      </label>
    </form>
  )
}
