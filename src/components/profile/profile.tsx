import React from 'react';
import style from './profile.module.css';
import ProfileInfo from "./profileInfo/profileInfo";
import MyPostsContainer from "./my-posts/myPostsContainer";

type propsType = {
    setUserProfile: (profile: any) => void;
    profile: any;
}

// FC<ProfileContainerProps>
const Profile = (props: propsType) => {
    return (
        <section className={style.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </section>
    );
}

export default Profile;