import React from 'react'
import s from '../Users.module.css'

const User = ({userId, name, status, country, city, followed, pic, handleFollow, handleUnfollow}) => {

    return (
        <div className={s.userWrapper} data-id={userId} >
            <div className={s.userAction}>
                <img className={s.img} src={pic} alt="avatar"/>
                {followed
                    ? <button className={s.btn} onClick={() => handleUnfollow(userId)} >Unfollow</button>
                    : <button className={s.btn} onClick={() => handleFollow(userId)} >Follow</button> }
            </div>
            <div className={s.userInfo}>
                <div className={s.name}>
                    <span className={s.username}>{name}</span>
                    <span className={s.status}>{status}</span>
                </div>
                <div className={s.location}>
                    <span className={s.country}>{country},</span>
                    <span className={s.city}>{city}</span>
                </div>
            </div>
        </div>

    )
}

export default User;
