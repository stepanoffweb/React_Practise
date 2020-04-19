import React from 'react'
import s from './Post.module.css'



export default function Post({message}) {

  return (
    <div className={s.post}>

      <img src="" alt=""/>
      <h5>Another Post</h5>
      <p>{message}</p>
      <button onClick={(e) => {
        console.log(e);
        let post = e.target.parentNode;
        !post.querySelector('span') && post.appendChild(document.createElement('span'));
        let span = post.querySelector('span');
        let count = +span.innerHTML;
        count++;
        span.innerHTML = count;
      }} >Like</button>

    </div>
  )
}

/*https://lh3.googleusercontent.com/proxy/rkeJNb0JMuqO2rMa5XbbNvtXWQQpTfwz7S3NWmhUgh6jFtiw-Vuc0BrJWWv9ldat7SxvJPUyQh6dXhRHnLdJKZPM2DAoMRv6y9Z_t6__64fUmMJqAvRCriLQ5wU*/
