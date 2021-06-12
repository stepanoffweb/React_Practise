import React, { useContext } from "react"
import { AlertContext } from "../context/alert/alertContext"

export default function Alert() {
  const { hide, alert } = useContext(AlertContext)
  //   console.log("alert:", alert.type)

  return (
    <>
      {alert.visible && (
        <div
          className={`alert alert-${alert.type || "warning"} alert-dismissible`}
        >
          <strong>Pay attantion!</strong> {alert.text}
          <button
            onClick={hide}
            type="button"
            className="btn-close"
            aria-label="Close"
          ></button>
        </div>
      )}
    </>
  )
}
