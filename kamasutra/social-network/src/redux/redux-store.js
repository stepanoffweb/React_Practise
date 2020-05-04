import {combineReducers, createStore} from 'redux'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import usersReducer from './users-reducer'

let reducers = combineReducers({
  profilePage: profileReducer, // ключ == ветка state!!!! в своем mapStateToProps = (state === state.branchName)
  messagePage: dialogsReducer,
  // sidebar: sidebarReducer,
  usersPage: usersReducer
})
let store = createStore(reducers)
window.store = store
// console.log(store);

export default store
