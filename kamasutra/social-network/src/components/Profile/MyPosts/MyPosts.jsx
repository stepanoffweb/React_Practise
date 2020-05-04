import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'



export default function MyPosts({posts, callDispatchAddPost, callDispatchShowLetters, callDispatchAddLike, newPostText}) {
  let textRef = React.createRef()

  const handleClick = (e) => {
    let id = Date.now();
    callDispatchAddPost(id);
  }
  const handleChange = (e) => {
    // console.log(showLetters);
    let text = e.target.value
    // let text = textRef.current.value;
    callDispatchShowLetters(text);
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
            <div>
              <div>
                <textarea placeholder="Write your message" onChange={handleChange} ref={textRef} name="text" id="post" cols="30" rows="5"  value={newPostText} />
              </div>
              <button onClick={handleClick} >Add post</button>
            </div>
            <div className={s.posts}>
              {posts.map(({id, message, likeCount, pic}) => <Post key={message} id={id} message={message} onClick={onClick} count={likeCount} pic={pic} />)     }
            </div>

        </div>

    )
}

