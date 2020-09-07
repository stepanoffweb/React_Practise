import Router from 'next/router'
import {MainLayout} from '../../layouts/MainLayout'

export default function About() {
    return <MainLayout>
        <h1>About Page</h1>
        <button onClick={() => Router.push('./')}>PUSH Me!!!!</button>
    </MainLayout>
}
