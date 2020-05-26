import React from 'react'
import {Field, reduxForm} from 'redux-form'

import s from './MyPosts.module.css'
import Post from './Post/Post'

let PostForm = (props) => {
  // let textRef = React.createRef()

  return    <form onSubmit={props.handleSubmit} >
      <div>
        <Field component='textarea' placeholder="Write your message" name="text" id="post" cols="30" rows="5" />
      </div>
      <div>
        <button >Add post</button>
      </div>
    </form>
}

PostForm = reduxForm({form: 'postform'})(PostForm)

export default function MyPosts({posts, callDispatchAddPost, callDispatchShowLetters, callDispatchAddLike, isAuth}) {

  const mySubmit = (formData) => {
    let id = Date.now();
    callDispatchAddPost(id, formData.text);
  }

  const onClick = (e) => {
    let likeCount = +e.target.parentNode.dataset.count
    let id = e.target.parentNode.dataset.id
    likeCount++
    callDispatchAddLike(id, likeCount)
  }

  return (
    <div className={s.myPosts}>
      <h3>My Posts</h3>
      <PostForm onSubmit={mySubmit} />
      <div className={s.posts}>
        {posts.map(({id, message, likeCount, pic}) => <Post key={id} id={id} message={message} onClick={onClick} count={likeCount} pic={pic} />)     }
      </div>
    </div>
  )
}
