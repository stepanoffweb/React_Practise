import React from 'react'
import {Field, reduxForm} from 'redux-form'

import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import s from './Dialogs.module.css'

let DialogForm = (props) => {
     return <form onSubmit={props.handleSubmit} >
         <Field component='textarea' name='dialogMessage' placeholder="write letters"  cols="30" rows="3" />
         <div>
             <button>Send message</button>
         </div>
                    {/*{console.log(messages[0].text)}*/}
     </form>
}

DialogForm = reduxForm({form: 'dialogform'})(DialogForm)

const Dialogs = ({dialogItems, messages, callDispatchAddMessage, isAuth}) => {
    // let messageTextRef = React.createRef()

    const dialogSubmit = (values) => {
        let id = Date.now();
        console.log(values.dialogMessage);
        callDispatchAddMessage(id, values.dialogMessage)
  }

    return (
        <>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                   { dialogItems.map(({name, id}) => <DialogItem name={name} key={id} id={id} />)}
                </div>
                <div className={s.messages}>
                   <DialogForm onSubmit={dialogSubmit} />
                    {messages.map(({text, id}) => <Message key={id} id={id} message={text} /> )}
                </div>
            </div>
        </>
    )
}

export default Dialogs;
