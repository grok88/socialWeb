import React from 'react';
import style from './profileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div className={style.profileInfo}>
            <div>
                <img
                    src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
                    alt="main-fon"/>
            </div>
            <div className={style.description}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;