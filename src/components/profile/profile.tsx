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
}


const Profile = (props:propsType) => {
    console.log(props)
    return (
        <section className={style.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </section>
    );
}

export default Profile;