import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import s from './Dialogs.module.css'


const Dialogs = ({dialogItems, messages}) => {
    let messageTextRef = React.createRef()

    const handleEnter = (e) => {
    if (e.key === 'Enter') {
      alert(messageTextRef.current.value)
      messageTextRef.current.value = ''
    }
  }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                   { dialogItems.map(({name, id}) => <DialogItem name={name} key={id} id={id} />)}

                </div>
                <div className={s.messages}>
                <textarea ref={messageTextRef} onKeyPress={handleEnter} cols="30" rows="10"></textarea>
                {/*{console.log(messages[0].text)}*/}
                    {messages.map(({text, id}) => <Message key={id} id={id} message={text} /> )}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
