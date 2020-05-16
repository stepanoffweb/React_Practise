// import React from 'react'
import {connect} from 'react-redux'

import s from './Dialogs.module.css'
import {createActionAddMessage} from '../../redux/dialogs-reducer'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import Dialogs from './Dialogs'

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

const AuthRedirectComponent = withAuthRedirect(Dialogs)

export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
