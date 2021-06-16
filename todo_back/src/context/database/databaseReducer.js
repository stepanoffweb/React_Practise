import React from "react"
import { ADD_NOTE, FETCH_BASE, REMOVE_NOTE, SHOW_LOADER } from "../types"

const handlers = {
  [SHOW_LOADER]: state => ({ ...state, isLoading: true }),
  [FETCH_BASE]: (state, { payload }) => ({
    ...state,
    notes: payload,
    isLoading: false,
  }), // payload - a array of note objects
  [ADD_NOTE]: (state, { payload }) => ({
    ...state,
    notes: [...state.notes, payload],
  }), // payload - a new note object
  [REMOVE_NOTE]: (state, { payload }) => ({
    ...state,
    notes: state.notes.filter(note => {
      // console.log("payload:", payload)
      // console.log("note.key:", note.key)
      return note.key !== payload
    }),
  }), // payload - id
  DEFAULT: state => state,
}

export const databaseReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
