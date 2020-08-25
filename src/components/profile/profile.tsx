import React from 'react';
import style from './profile.module.css';
import ProfileInfo from "./profileInfo/profileInfo";
import MyPostsContainer from "./my-posts/myPostsContainer";

type propsType = {
    getUserProfile: (userId:string) => void,
    profile: any;
    status: string;
    updateUserStatus: (status: string) => void;
}

// FC<ProfileContainerProps>
const Profile = (props: propsType) => {
    return (
        <section className={style.content}>
            <ProfileInfo profile={props.profile}  status={props.status} updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer/>
        </section>
    );
}

export default Profile;