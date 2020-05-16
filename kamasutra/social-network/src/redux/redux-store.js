import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'


import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'

let reducers = combineReducers({
  profilePage: profileReducer, // ключ == ветка state!!!! в своем mapStateToProps = (state === state.branchName)
  messagePage: dialogsReducer,
  // sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store
// console.log(store);

export default store
