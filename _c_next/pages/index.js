import Link from 'next/link'
import Head from 'next/head'
import {MainLayout} from '../layouts/MainLayout'

export default function index() {
    return <MainLayout>
    <Head>
        <title>Next App</title>
        <meta charSet="utf-8" />
    </Head>
    <h1>Hello, Next!!!</h1>
    <ul>
        <li>Index</li>
        <li><Link href="./about/" >About</Link></li>
        <li><Link href="./posts" > Posts</Link></li>
    </ul>
    </MainLayout>
}
