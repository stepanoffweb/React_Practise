import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'



export default function MyPost({posts, addPost}) {
  let textRef = React.createRef()

  const handleClick = () => {
    let id = Date.now();
    let message = textRef.current.value;
    addPost(id, textRef.current.value, 0);
      textRef.current.value = ''
  }

    return (
        <div className={s.myPosts}>
          <h3>My Posts</h3>
            <div>
              <div>
                <textarea ref={textRef} name="text" id="post" cols="30" rows="5"></textarea>
              </div>
              <button onClick={handleClick} >Add post</button>
            </div>
            <div className={s.posts}>
              {posts.map(({id, message, likeCount, onClick, pic}) => <Post key={id} id={id} message={message} onClick={onClick} count={likeCount} pic={pic} />)     }
            </div>

        </div>

    )
}

