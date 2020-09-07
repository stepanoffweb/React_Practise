import React, {useContext} from 'react'
import {ThemeContext} from './ThemeContext'

export default function FunctonContextComponent() {

    const dark = useContext(ThemeContext).darkTheme
    const toggleTheme = useContext(ThemeContext).toggleTheme

    const themeStyles = {
            backgroundColor: dark ? '#ccc' :  '#333',
            color: dark ? '#333' :'#ccc',
            padding: '2rem',
            margin: '2rem'
        }

    return   <>
            <button onClick={toggleTheme} >Toggle Theme</button>
            <div style={themeStyles} >Functional Theme</div>
        </>

}
