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
    posts:{
        posts: Array<ObjType>,
        newPostText:string,
    }
    addPost : () => void,
    changeNewPostText:(text:string) => void
}


const Profile = (props:propsType) => {

    return (
        <section className={style.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost} changeNewPostText={props.changeNewPostText}/>
        </section>
    );
}

export default Profile;