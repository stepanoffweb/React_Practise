// const SHOW_MASSAGE = 'SHOW_MESSAGE'
const ADD_MESSAGE = 'ADD_MESSAGE'

export let createActionAddMessage = (id, text) => ({type: ADD_MESSAGE, id, text})
// export let createActionShowMessage = (text) => ({type: SHOW_MESSAGE, text })

let initialState = {
      dialogItems: [
        {name: "Name-1", id: 0},
        {name: "Name-2", id: 2},
        {name: "Name-3", id: 3},
        {name: "Name-4", id: 4},
        {name: "Name-5", id: 5},
        {name: "Name-6", id: 6},
      ],
      messages: [
        {text: "What's up?", id: 0},
        {text: "Yo!!!" , id: 1},
        {text: "How is Your webDev?", id: 2},
        {text: "Who are you??", id: 3},
      ],
      newMessageText: 'Hi'
}

const dialogsReducer = (state = initialState, action) => {

  switch(action.type) {
    case ADD_MESSAGE:
      return  {...state,
        messages: [...state.messages, {id: action.id, text: action.text}], // перезаписывает свойство с предыдущей строки на его deep copy
        // newMessageText: newMessage.text,
        newMessageText: ''
          }
    default:
      return state
  }
}

export default dialogsReducer
