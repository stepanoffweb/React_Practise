import React from 'react';

import logo from './logo.png';
import classes from  './header.module.css';

export default function Header() {
    return (
        <header className={classes.header}>
            <img src={logo} alt="logo"/>
        </header>
    )
}
