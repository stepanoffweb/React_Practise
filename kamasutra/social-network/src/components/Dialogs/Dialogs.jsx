import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Dialogs.module.css'


const dialogItems = [
    {name: "Name-1", id: 0},
    {name: "Name-2", id: 2},
    {name: "Name-3", id: 3},
    {name: "Name-4", id: 4},
    {name: "Name-5", id: 5},
    {name: "Name-6", id: 6},
]
const DialogItem = ({name, id}) => {
    return <div className={s.dialogItem + ' ' + s.active}>
                <NavLink to={`/dialogs/${id}`} >{name}</NavLink>
            </div>

}
const messages = [
{text: "What's up?", id: 0},
{text: "Yo!!!" , id: 1},
{text: "How is Your webDev?", id: 2},
{text: "Who are you??", id: 3},
]

const Message = ({message, id}) => {
    return <div id={id} className={s.message}>{message}</div>
}
const Dialogs = () => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                   { dialogItems.map(({name, id}) => <DialogItem name={name} id={id} />)}

                </div>
                <div className={s.messages}>
                {/*{console.log(messages[0].text)}*/}
                    {messages.map(({text, id}) => <Message id={id} message={text} /> )}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
