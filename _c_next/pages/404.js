import Link from 'next/link'
import {MainLayout} from '../layouts/MainLayout'

export default function ErrorPage() {
    return <MainLayout>
        <h1>Error 404</h1>
        <p>Please, <Link href={"/"}><a >go back </a></Link>to safety</p>
        <style jsx>
            {`
            h1 {color: darkred;}`}
        </style>
    </MainLayout>

}
