import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import s from './Dialogs.module.css'

const Dialogs = ({dialogItems, messages, newMessageText, callDispatchAddMessage}) => {
    let messageTextRef = React.createRef()

// !НЕПРАВИЛЬНАЯ реализация onChange - не через измененный store, а нативными средствами браузера (полезно знать defaultValue)
    const handleEnter = (e) => {
    if (e.key === 'Enter') {
        e.preventDefault() // перевод строки
        callDispatchAddMessage(6, e.target.value)
      messageTextRef.current.value = newMessageText
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
                <textarea placeholder="write letters" defaultValue={newMessageText} ref={messageTextRef} onKeyPress={handleEnter} cols="30" rows="3"></textarea>
                {/*{console.log(messages[0].text)}*/}
                    {messages.map(({text, id}) => <Message key={id} id={id} message={text} /> )}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
