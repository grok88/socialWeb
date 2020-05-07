import React from 'react';
import style from './profile.module.css';
import MyPosts from "./my-posts/myPosts";
import ProfileInfo from "./profileInfo/profileInfo";


const Profile = () => {
    return (
        <section className={style.content}>
            <ProfileInfo/>
            <MyPosts/>
        </section>
    );
}

export default Profile;