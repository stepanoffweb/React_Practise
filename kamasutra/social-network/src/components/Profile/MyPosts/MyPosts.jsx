import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'



export default function MyPost({posts, callDispatchAddPost, callDispatchShowLetters, newPostText}) {
  let textRef = React.createRef()

  const handleClick = () => {
    let id = Date.now();
    let likeCount = 0
    callDispatchAddPost(id, likeCount);
  }
  const handleChange = (e) => {
    // console.log(showLetters);
    let text = e.target.value
    // let text = textRef.current.value;
    callDispatchShowLetters(text);
  }

    return (
        <div className={s.myPosts}>
          <h3>My Posts</h3>
            <div>
              <div>
                <textarea placeholder="Write your message" onChange={handleChange} ref={textRef} name="text" id="post" cols="30" rows="5"  value={newPostText} />
              </div>
              <button onClick={handleClick} >Add post</button>
            </div>
            <div className={s.posts}>
              {posts.map(({id, message, likeCount, onClick, pic}) => <Post key={id} id={id} message={message} onClick={onClick} count={likeCount} pic={pic} />)     }
            </div>

        </div>

    )
}

