const ADD_POST = 'ADD_POST'
const ADD_LIKE = 'ADD_LIKE'
const SHOW_LETTERS = 'SHOW_LETTERS'
const SET_PROFILE = 'SET_PROFILE'

export let createActionAddPost = (id) => ({type: ADD_POST, id })
export let createActionShowLetters = (text) => ({type: SHOW_LETTERS, text })
export let createActionAddLike = (id, likeCount)  => ({type: ADD_LIKE, id, likeCount })
export let SetUserProfile = (profile)  => ({type: SET_PROFILE, profile})

let initialState = {
  posts: [
    {id: 0,message: "Hi, it's my first post!", likeCount: 0, pic: 'https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw60190d91/smear-mobile/42170_slick.jpg?sw=550'},
    {id: 1,message: "You'r welcome, my friend!!!!", likeCount: 0, pic: 'https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw60190d91/smear-mobile/42170_slick.jpg?sw=550'},
    {id: 2,message: "Ammmmm...", likeCount: 0, pic: 'https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw60190d91/smear-mobile/42170_slick.jpg?sw=550'},
  ],
  newPostText: 'XZ',
  profile: null // чтобы первая отрисовка запустила Preloader
}

const profileReducer = (state = initialState, action) => {

  switch(action.type) {
      case ADD_POST :
        return {...state,
        posts: [...state.posts, {id: action.id, message: state.newPostText}],
        newPostText: ''
        } // возвращаем копию state с изменениями
      case SHOW_LETTERS:
        return {...state,
          newPostText: action.text
        }
      case SET_PROFILE:
        return {...state,
          profile: action.profile
        }
      case ADD_LIKE:
        return {...state,
        posts: [...state.posts],
        // posts.map((post) => {post.id === action.id ? post.likeCount++ : ''})
        }
      default:
        return state
  }
}

export default profileReducer
