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
   dispatch: (action:any) => void,
   // changeNewPostText:(text:string) => void
}


const Profile = (props:propsType) => {

    return (
        <section className={style.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} dispatch={props.dispatch}/>
        </section>
    );
}

export default Profile;