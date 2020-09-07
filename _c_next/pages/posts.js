import {MainLayout} from '../layouts/MainLayout'
import Link from 'next/link'
// import { useState, useEffect } from 'react'

export default function Posts({posts}) {
    // const [posts, setPosts] = useState([])
    // const postsUrl = 'http://localhost:4200/posts'

    // useEffect(() => {
    //     async function getPosts(url) {
    //         const response = await fetch(url)
    //         const posts = await response.json()
    //         setPosts(posts)
    //     }
    //     getPosts(postsUrl)
    // }, [postsUrl])

    return (<MainLayout>
        <h1>Posts Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum beatae nostrum odio tempore nesciunt eaque maiores architecto voluptatum accusantium id velit repellendus possimus harum earum ex, illum modi libero ipsum accusamus natus culpa. Voluptates porro unde suscipit possimus commodi facilis! Magnam modi ad ducimus sint recusandae, deleniti amet molestiae quod.</p>
        <ul>
            <li>Сам превед</li>
            <li><Link href="/">Я устал</Link></li>
            <li><Link href="/post/1">Я мухожук</Link></li>
            <li>этот Next такой</li>
            <li><Link href="/post/id">.....</Link></li>
        </ul>
        {posts.map(post => (
            <div className="post" key={post.id} >
                <h2><Link href={`/post/${post.id}`}><a>{post.title}</a></Link></h2>
            </div>
            ))}
    </MainLayout>)
}

Posts.getInitialProps = async () => {
    const response = await fetch('http://localhost:4200/posts')
    const posts = await response.json()
    return {posts}
}
