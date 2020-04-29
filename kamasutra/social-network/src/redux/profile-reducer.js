const ADD_POST = 'ADD_POST'
const SHOW_LETTERS = 'SHOW_LETTERS'

export let createActionAddPost = (id, likeCount) => ({type: ADD_POST, id, likeCount })
export let createActionShowLetters = (text) => ({type: SHOW_LETTERS, text })

let initialState = {
      posts: [
        {id: 0,message: "Hi, it's my first post!", likeCount: 0, onClick:(e) => this.handleClick, pic: 'https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw60190d91/smear-mobile/42170_slick.jpg?sw=550'},
        {id: 1,message: "You'r welcome, my friend!!!!", likeCount: 0, onClick:(e) => this.handleClick, pic: 'https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw60190d91/smear-mobile/42170_slick.jpg?sw=550'},
        {id: 2,message: "Ammmmm...", likeCount: 0, onClick: (e) => this.handleClick, pic: 'https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw60190d91/smear-mobile/42170_slick.jpg?sw=550'},
      ],
      newPostText: 'XZ'
}

const profileReducer = (state = initialState, action) => {
  let stateCopy

  switch(action.type) {
      case ADD_POST :
              return {...state,
              posts: [...state.posts, {id: action.id, message: state.newPostText, likeCount: action.likeCount}],
              newPostText: ''
              }
      case SHOW_LETTERS:
              return {...state,
                newPostText: action.text
              }
      default:
        return state
  }
}

export default profileReducer
