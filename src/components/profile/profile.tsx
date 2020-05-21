import React from 'react';
import style from './profile.module.css';
import MyPosts from "./my-posts/myPosts";
import ProfileInfo from "./profileInfo/profileInfo";


type ObjType = {
    id: string,
    message: string,
    likeCount: string
}

type propsType = {
    posts: Array<ObjType>
    addPost : (message:string) => void
}


const Profile = (props:propsType) => {

    return (
        <section className={style.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </section>
    );
}

export default Profile;