import React from 'react'
import s from './Dialogs.module.css'
import {createActionAddMessage} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'


const mapStateToProps = (state) => {
    return {
        dialogItems: state.messagePage.dialogItems,
        messages: state.messagePage.messages,
        newMessageText: state.messagePage.newMessageText,
    }
}

const mapDispatchToProps = (dispatch) => { //oldscool technique
    return {
        callDispatchAddMessage: (id, text) => {
            dispatch(createActionAddMessage(id, text))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;
