import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import s from './Dialogs.module.css'


const Dialogs = ({dialogItems, messages}) => {
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
