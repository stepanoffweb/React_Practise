const ADD_POST = 'ADD_POST'
const SHOW_LETTERS = 'SHOW_LETTERS'

export let createActionAddPost = (id, likeCount) => ({type: ADD_POST, id, likeCount })
export let createActionShowLetters = (text) => ({type: SHOW_LETTERS, text })

const profileReducer = (state, action) => {

  switch(action.type) {
      case ADD_POST :
        let newPost = {id: action.id, message: state.newPostText, likeCount: action.likeCount}
        state.posts.push(newPost)
        state.newPostText = ''
        return state
      case SHOW_LETTERS:
        state.newPostText = action.text
        return state
      default:
        return state
  }
}

export default profileReducer
