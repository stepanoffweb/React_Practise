import React from 'react'
import {ThemeContext} from './App'

export default class ClassContextComponent extends React.Component {
    darkStyle(dark) {
        return {
            backgroundColor: dark ? '#333' : '#ccc',
            color: dark ? '#ccc' : '#333',
            padding: '2rem',
            margin: '2rem'
        }
    }

    render() {
        return <ThemeContext.Consumer >
                {darkThem =>   <div style={this.darkStyle(darkThem)} >Class Theme </div> }
            </ThemeContext.Consumer >
    }
}
