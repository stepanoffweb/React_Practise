import {usersAPI, profileAPI} from '../api/api'

const ADD_POST = 'ADD_POST'
const ADD_LIKE = 'ADD_LIKE'
const SHOW_LETTERS = 'SHOW_LETTERS'
const SET_PROFILE = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'

export const createActionAddPost = (id) => ({type: ADD_POST, id })
export const createActionShowLetters = (text) => ({type: SHOW_LETTERS, text })
export const createActionAddLike = (id, likeCount)  => ({type: ADD_LIKE, id, likeCount })
export const SetUserProfile = (profile)  => ({type: SET_PROFILE, profile})
export const SetStatus = (status)  => ({type: SET_STATUS, status})

export const getUserProfile = (id) => {
  return (dispatch) => {
     usersAPI.getUserProfile(id).then(response => {
        dispatch(SetUserProfile(response.data))
      })
  }
}

export const getStatus = (id) => {
  return (dispatch) => {
     profileAPI.getStatus(id).then(response => {
        dispatch(SetStatus(response.data))
      })
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
     profileAPI.updateStatus(status).then(response => {
       if(response.data.resultCode === 0)
        dispatch(SetStatus(status))
      })
  }
}

let initialState = {
  posts: [
    {id: 0,message: "Hi, it's my first post!", likeCount: 0, pic: 'https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw60190d91/smear-mobile/42170_slick.jpg?sw=550'},
    {id: 1,message: "You'r welcome, my friend!!!!", likeCount: 0, pic: 'https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw60190d91/smear-mobile/42170_slick.jpg?sw=550'},
    {id: 2,message: "Ammmmm...", likeCount: 0, pic: 'https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw60190d91/smear-mobile/42170_slick.jpg?sw=550'},
  ],
  newPostText: 'XZ',
  profile: null, // чтобы первая отрисовка запустила Preloader
  status: '------'
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
       case SET_STATUS:
        return {...state,
          status: action.status
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
