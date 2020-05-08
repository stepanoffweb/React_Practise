const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'ADD_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'

export let createActionFollow = (userId) => ({type: FOLLOW, userId })
export let createActionUnfollow = (userId) => ({type: UNFOLLOW, userId })
export let createActionSetUsers = (users) => ({type: SET_USERS , users})
export let createActionSetCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE , currentPage})
export let createActionSetTotalCount = (totalUsersCount) => ({type: SET_TOTAL_COUNT, totalUsersCount})

let initialState = {
  users: [],
  pageSize: 3,
  totalUsersCount: 0,
  currentPage: 3,
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
      return {...state, users: action.users}
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}
    case SET_TOTAL_COUNT:
      return {...state, totalUsersCount: action.totalUsersCount}

    default:
      return state
  }
}

export default usersReducer
