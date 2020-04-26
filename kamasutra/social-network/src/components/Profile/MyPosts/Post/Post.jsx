import React from 'react'
import s from './Post.module.css'


export default function Post({message, onClick, count, pic}) {

  return (
    <div className={s.post}>
    {console.log(onClick)}

      <img src={pic} alt="avatar"/>
      <h5>Another Post</h5>
      <p>{message}</p>
      <button onClick={onClick} >Like {count}</button>

    </div>
  )
}

/*https://lh3.googleusercontent.com/proxy/rkeJNb0JMuqO2rMa5XbbNvtXWQQpTfwz7S3NWmhUgh6jFtiw-Vuc0BrJWWv9ldat7SxvJPUyQh6dXhRHnLdJKZPM2DAoMRv6y9Z_t6__64fUmMJqAvRCriLQ5wU*/
