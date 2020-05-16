import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "85b1845a-610b-40eb-b2eb-a23834f06e57"
  }
})


export const usersAPI = {
  getUsers(currentPage = 2, pageSize = 20) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {return response.data})
  },
  postFollow(userId) {return instance.post(`follow/${userId}`)},
  deleteFollow(userId) {return instance.delete(`follow/${userId}`)}
}

// const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'
// export const getUsers = (currentPage = 2, pageSize = 20) => {
//   return axios.get(`${baseUrl}users?page=${currentPage}&count=${pageSize}`).then(response => {return response.data})
// }
