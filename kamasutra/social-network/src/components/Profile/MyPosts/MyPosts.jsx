import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'



export default function MyPost({posts}) {

    return (
        <div className={s.myPosts}>
          <h3>My Posts</h3>
            <div>
              <div>
                <textarea name="text" id="post" cols="30" rows="5"></textarea>
              </div>
              <button>Add post</button>
            </div>
            <div className={s.posts}>
              {posts.map(({id, message, count, onClick}) => <Post id={id} message={message} onClick={onClick} count={count} />)     }
            </div>

        </div>

    )
}

