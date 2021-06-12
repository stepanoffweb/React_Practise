import React, { useContext, useState } from "react"
import { AlertContext } from "../context/alert/alertContext"

export default function Form() {
  const [value, setValue] = useState("")
  const alert = useContext(AlertContext)

  const handleSubmit = e => {
    e.preventDefault()
    alert.show(value, "success")
    setValue("")
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
