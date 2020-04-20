import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Dialogs.module.css'

const DialogItem = ({name, id}) => {
    return <div className={s.dialogItem + ' ' + s.active}>
                <NavLink to={`/dialogs/${id}`} >{name}</NavLink>
            </div>

}

const Message = ({message}) => {
    return <div className={s.message}>{message}</div>
}
const Dialogs = () => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    <DialogItem name="Name-1" id="1" />
                    <DialogItem name="Name-2" id="2" />
                    <DialogItem name="Name-3" id="3" />
                    <DialogItem name="Name-4" id="4" />
                    <DialogItem name="Name-5" id="5" />
                    <DialogItem name="Name-6" id="6" />

                </div>
                <div className={s.messages}>
                    <Message message="What's up?" />
                    <Message message="Yo!!!" />
                    <Message message="How is Your webDev?" />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
