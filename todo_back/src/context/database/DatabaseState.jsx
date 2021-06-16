import axios from "axios"
import React, { useReducer } from "react"
import { ADD_NOTE, FETCH_BASE, REMOVE_NOTE, SHOW_LOADER } from "../types"
import { DatabaseContext } from "./databaseContext"
import { databaseReducer } from "./databaseReducer"

const URL = process.env.DB_URL
console.log("URL:", URL)

export const DatabaseState = ({ children }) => {
  const initialState = { notes: [], isLoading: false }

  const [state, dispatch] = useReducer(databaseReducer, initialState)
  const showLoader = () => {
    dispatch({ type: SHOW_LOADER })
  }

  const fetchBase = async () => {
    showLoader()
    const res = await axios.get(
      `https://english-book-a3618.firebaseio.com/notes.json`
    )
    const notesKeys = Object.keys(res.data)
    const notes = []
    notesKeys.forEach(k => {
      res.data[k].key = k
      notes.push(res.data[k])
    }) // refactor - 01.04.09

    dispatch({ type: FETCH_BASE, payload: notes })
  }

  const addNote = async text => {
    const note = { title: text, id: new Date().toJSON() }
    const res = await axios.post(
      `https://english-book-a3618.firebaseio.com/notes.json`,
      note
    )
    const payload = { ...note, key: res.data.name }
    dispatch({ type: ADD_NOTE, payload })
  }

  const removeNote = async id => {
    await axios.delete(
      `https://english-book-a3618.firebaseio.com/notes/${id}.json`
    )
    dispatch({ type: REMOVE_NOTE, payload: id })
  }

  return (
    <DatabaseContext.Provider
      value={{
        fetchBase,
        addNote,
        removeNote,
        isLoading: state.isLoading,
        notes: state.notes,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  )
}
