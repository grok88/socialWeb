import React from 'react';
import style from './profile.module.css';
import ProfileInfo from "./profileInfo/profileInfo";
import MyPostsContainer from "./my-posts/myPostsContainer";


type ObjType = {
    id: string,
    message: string,
    likeCount: string
}

type propsType = {
   //  posts:{
   //      posts: Array<ObjType>,
   //      newPostText:string,
   //  }
   // dispatch: (action:any) => void,
   // changeNewPostText:(text:string) => void
   //  store:any
}


const Profile = (props:propsType) => {
    return (
        <section className={style.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </section>
    );
}

export default Profile;