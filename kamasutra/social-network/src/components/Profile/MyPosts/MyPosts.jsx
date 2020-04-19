import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'



export default function MyPost() {
    return (
        <div className={s.myPosts}>My Posts
          <div>
            <textarea name="text" id="post" cols="30" rows="5"></textarea>
            <button>Add post</button>
          </div>
          <div className={s.posts}>
          <Post message="Hi, it's my first post!" />
          <Post message="FUCK u, asshole!!!!" />
          </div>
        </div>

    )
}

