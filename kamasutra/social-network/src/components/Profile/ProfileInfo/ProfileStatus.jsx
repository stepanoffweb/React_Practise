import React from 'react'

import s from './ProfileInfo.module.css'


export default class ProfileStatus extends React.Component {
    statusInputRef = React.createRef()

    state = {
        editMode: false
    }

    activateEditMode = () => { // method as arrow function
        // debugger
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode() { // oldschool method with bind in constructor or when it invokes
        // debugger
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.statusInputRef.current.value)
    }

    render() {
        return <>
            {!this.state.editMode &&
                <div className={s.statusText}>
                    <p onDoubleClick={this.activateEditMode} >Status: {this.props.status}</p>
                </div>}

            {this.state.editMode &&
                <div className={s.statusInput}>
                    <input ref={this.statusInputRef} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} defaultValue={this.props.status} />
                </div>}
        </>
    }
}
