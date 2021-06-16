import React from "react"
import { HIDE_ALERT, SHOW_ALERT } from "../types"

const handlers = {
  [SHOW_ALERT]: (_, { payload }) => ({ ...payload, visible: true }),
  [HIDE_ALERT]: state => ({ ...state, visible: false }),
  DEFAULT: state => state,
}

export const alertReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
