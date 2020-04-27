import React from 'react'
import s from './Dialogs.module.css'
import {createActionAddMessage} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'


const DialogsContainer = ({dispatch, dialogItems, messages, newMessageText}) => {
    let messageTextRef = React.createRef()

    const callDispatchAddMessage = (id, text) => {
        dispatch(createActionAddMessage(id, text))
    }

    return (
        <Dialogs dialogItems={dialogItems}
            messages={messages}
            newMessageText={newMessageText}
            callDispatchAddMessage={callDispatchAddMessage} />
    )
}

export default DialogsContainer;
