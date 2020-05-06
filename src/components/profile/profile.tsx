import React from 'react';
import style from './profile.module.css';
import MyPosts from "./my-posts/myPosts";

const Profile = () => {
    return (
        <section className={style.content}>
            <div>
                <img
                    src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
                    alt="main-fon"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </section>
    );
}

export default Profile;