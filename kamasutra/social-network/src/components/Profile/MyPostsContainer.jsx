import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import {createActionAddPost, createActionShowLetters} from '../../redux/profile-reducer'



export default function MyPostsContainer({posts, dispatch, newPostText}) {
  let textRef = React.createRef()


  const callDispatchAddPost = (id, likeCount) => {
    dispatch(createActionAddPost(id, likeCount));
  }
  const callDispatchShowLetters = (text) => {
    dispatch(createActionShowLetters(text));
  }

    return (
      <MyPosts posts={posts} newPostText={newPostText} callDispatchAddPost={callDispatchAddPost} callDispatchShowLetters={callDispatchShowLetters} />

    )
}
