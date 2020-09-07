import {useRouter} from 'next/router'
import Link from 'next/link'

import {MainLayout} from '../../layouts/MainLayout'
import { useState, useEffect } from 'react'

export default function Post({post: serverPost}) {
    const [post, setPost] = useState(serverPost)
    console.log('post: ', post);
    const router = useRouter()
    // console.log('router: ', router);

    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:4200/posts/${router.query.template}`)
            const data = await response.json()
            setPost(data)
        }
        if (!serverPost) {
            load()
        }
    }, [])


    if (!post) {
        return <MainLayout>
            <h1>Loading...</h1>
        </MainLayout>
    }
    return (
       <MainLayout>
            <h1>{post.title} </h1>
            <hr/>
            <p>{post.body}</p>
            <h5>Go back to <Link href="/posts"> POSTS</Link></h5>
       </MainLayout>
    )
}

Post.getInitialProps = async (ctx) => {
    if (!ctx.req) return {post: null}

    const response = await fetch(`http://localhost:4200/posts/${ctx.query.template}`)
    const post = await response.json()
    return {
        post
    }
}


    // <h1><Link href={'/'}>Post router.query.template = </Link>{router.query.template}</h1>
// router: ServerRouter {
//     route: '/post/[template]',
//     pathname: '/post/[template]',
//     query: {},
//     asPath: '/post/[template]',
//     basePath: '',
//     events: undefined,
//     isFallback: false
// }
// ответ клиенту(WebDevTools) router: {
//     pathname: "/post/[template]",
//     route: "/post/[template]",
//     query: {
//         …},
//     asPath: "/post/id",
//     components: {
//         …},
//     …
// }
// asPath: "/post/id" // !!! из адресной строки, где отрисована страница...Зачем возвращать мне набранный адрес?
// back: ƒ()
// basePath: ""
// beforePopState: ƒ()
// components: {
//         /post/ [template]: {
//             …},
//         /_app: {…}}
//         events: {
//             on: ƒ,
//             off: ƒ,
//             emit: ƒ
//         }
//         isFallback: false
//         pathname: "/post/[template]"
//         prefetch: ƒ()
//         push: ƒ()
//         query: {
//             template: "id"
//         } // ключ - название файла !
//         reload: ƒ()
//         replace: ƒ()
//         route: "/post/[template]"
//         __proto__: Object
