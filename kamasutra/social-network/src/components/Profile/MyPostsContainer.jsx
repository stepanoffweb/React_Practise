import React from 'react'
import {connect} from 'react-redux'
import MyPosts from './MyPosts/MyPosts'

import {createActionAddPost, createActionShowLetters} from '../../redux/profile-reducer'


  const mapStateToProps = (state) => {
   return {
     newPostText: state.profilePage.newPostText,
     posts: state.profilePage.posts
   }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      callDispatchShowLetters: (text) => dispatch(createActionShowLetters(text)),
      callDispatchAddPost: (id, likeCount) => dispatch(createActionAddPost(id, likeCount))
    }
  }

const MyPostsContainer =  connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer
