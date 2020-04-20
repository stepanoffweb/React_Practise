import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'



export default function MyPost() {
      let count = 0;
      function handleClick(e) {
        count++;
        e.target.innerHTML = `Like ${count}`;
      }
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
            <Post message="Hi, it's my first post!" onClick={handleClick} count={count} />
            <Post message="FUCK u, asshole!!!!" />
            </div>

        </div>

    )
}

