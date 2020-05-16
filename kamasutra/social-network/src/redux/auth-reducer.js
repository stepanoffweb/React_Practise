import {usersAPI} from '../api/api'

const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA'

export const SetUserAuthData = (id, email, login)  => ({type: SET_USER_AUTH_DATA, data: {id, email, login}})

export const getAuthData = () => {
  return (dispatch) => {
    usersAPI.getAuth().then(response => {
        if(response.data.resultCode === 0){
            let {id, email, login} = response.data.data
            dispatch(SetUserAuthData(id, email, login))
        }
      })
  }
}

let initialState = {
  id: 7243,
  login:  "ivanstepanov",
  email: "dovolnyi@inbox.ru",
  isAuth: false
}

const authReducer = (state = initialState, action) => {

  switch(action.type) {
      case SET_USER_AUTH_DATA :
        return {...state,
          ...action.data,
          isAuth: true //авторизация состоялась
        }

      default:
        return state
  }
}

export default authReducer
