import React from 'react';
import style from './profile.module.css';
import MyPosts from "./my-posts/myPosts";
import ProfileInfo from "./profileInfo/profileInfo";
import {v1} from "uuid";

type ObjType = {
    id: string,
    message: string,
    likeCount: string
}

const posts: Array<ObjType> = [
    {id: v1(), message: 'Hello, What are you doing?', likeCount: '5'},
    {id: v1(), message: 'Hi, I am learning TypeScript now.', likeCount: '13'},
];

const Profile = () => {
    return (
        <section className={style.content}>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </section>
    );
}

export default Profile;