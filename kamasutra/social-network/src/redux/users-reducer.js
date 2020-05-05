const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'ADD_USERS'

export let createActionFollow = (userId) => ({type: FOLLOW, userId })
export let createActionUnfollow = (userId) => ({type: UNFOLLOW, userId })
export let createActionSetUsers = (state) => ({type: SET_USERS , state})

let initialState = {
  users: []
}

const usersReducer = (state = initialState, action) => {
  // console.log(state);//{users: Array(0)} users: []

  switch(action.type) {
    case FOLLOW :
      return {...state,
        users: state.users.map(user => (user.id === action.userId) ? {...user, followed: true} : user)
      }
    case UNFOLLOW:
      return {...state,
                // users: state.users.map((user) => (user.id === action.userId) ? {...user, followed: false} : user)

        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          }
          return user
        })
      }
    case SET_USERS:
    // debugger
    return {...state, users: [...action.state]}
    default:
      return state
  }
}

export default usersReducer
