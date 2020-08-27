 export const getUsers = state => state.usersPage.users
 // more complex usage with 'reselect' library:
 // import {createSelector} from 'reselect'

 // const getUsersSelector = state => state.usersPage.users
 // export const getUsers = createSelector(getUsersSelector,
 //   users => {
 //     return users.filter(u => true)
 //   })


 export const getPageSize = state => state.usersPage.pageSize
 export const geTotalUsersCount = state => state.usersPage.totalUsersCount
 export const getCurrentPage = state => state.usersPage.currentPage
 export const getIsFetching = state => state.usersPage.isFetching
 export const geFollowingInProgress = state => state.usersPage.followingInProgress



