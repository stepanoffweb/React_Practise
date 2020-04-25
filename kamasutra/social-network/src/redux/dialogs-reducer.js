// const SHOW_MASSAGE = 'SHOW_MESSAGE'
const ADD_MESSAGE = 'ADD_MESSAGE'

export let createActionAddMessage = (id, text) => ({type: ADD_MESSAGE, id, text})
// export let createActionShowMessage = (text) => ({type: SHOW_MESSAGE, text })

const dialogsReducer = (state, action) => {

  switch(action.type) {
    case ADD_MESSAGE:
      let newMessage = {id: action.id, text: action.text}
      state.messages.push(newMessage)
      state.newMessageText = newMessage.text
      state.newMessageText = ''
      return state
      default:
        return state
  }
}

export default dialogsReducer
