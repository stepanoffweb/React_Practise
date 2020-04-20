import React from 'react'
import s from './ProfileInfo.module.css'
import hero from './fireball_1200x226.jpg';


export default function ProfileInfo() {
    return (
        <div>
            <div>
                <img src={hero} alt="hero" className={s.hero} />
            </div>
            <div className={s.contentHead}>
              <img src="https://sun9-6.userapi.com/QqHBpjLe2yLFnKJ58RKzAm5Ha0JrcRpCI70M5A/HL3ROS3t4h0.jpg?ava=1" alt="avatar" />
              <div className={s.descr}>Description</div>
            </div>
        </div>
    )
}
