import React, { useContext } from "react"
import { CSSTransition } from "react-transition-group"
import { AlertContext } from "../context/alert/alertContext"

export default function Alert() {
  const { hide, alert } = useContext(AlertContext)

  return (
    <CSSTransition
      in={alert.visible}
      timeout={{ enter: 500, exit: 250 }}
      classNames={"alert"}
      mountOnEnter
      unmountOnExit
    >
      {
        // alert.visible &&
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
      }
    </CSSTransition>
  )
}
