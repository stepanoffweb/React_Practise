import React from 'react'
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    <div className={s.dialogItem + ' ' + s.active}>Name-1</div>
                    <div className={s.dialogItem}>Name-2</div>
                    <div className={s.dialogItem}>Name-3</div>
                    <div className={s.dialogItem}>Name-4</div>
                    <div className={s.dialogItem}>Name-5</div>
                    <div className={s.dialogItem}>Name-6</div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>What's up?</div>
                    <div className={s.message}>How is Your webDev?</div>
                    <div className={s.message}>Yo!!!</div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
