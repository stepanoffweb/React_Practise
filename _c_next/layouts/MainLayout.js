import Link from 'next/link'
import classes from '../styles/mainlayouts.module.css'

export function MainLayout({children}) {
    return (
        <>
        <nav className={classes.nav}>
            <li>
                <Link href={'/'}><a className={classes.link}>Home</a></Link>
            </li>
            <li>
                <Link href={'/about'}><a className={classes.link}>About</a></Link>
            </li>
            <li>
                <Link href={'/posts'}><a className={classes.link}>Posts</a></Link>
            </li>
        </nav>
        <main>
            {children}
        </main>

        <style jsx>
            {`
                main {
                    margin: 60px auto 0;
                    padding: 2em;
                }
            `}
        </style>
        </>
    )
}
