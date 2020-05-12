const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA'

export let SetUserAuthData = (id, email, login)  => ({type: SET_USER_AUTH_DATA, data: {id, email, login}})

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
