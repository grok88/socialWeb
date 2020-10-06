import React from 'react';
import style from './profile.module.css';
import ProfileInfo from "./profileInfo/profileInfo";
import MyPostsContainer from "./my-posts/myPostsContainer";

type propsType = {
    getUserProfile: (userId: string) => void,
    profile: any;
    status: string;
    updateUserStatus: (status: string) => void;
    isOwner: boolean
    onUploadImg: (file: any) => void;
}

// FC<ProfileContainerProps>
const Profile = (props: propsType) => {
    return (
        <section className={style.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}
                         isOwner={props.isOwner} onUploadImg={props.onUploadImg}/>
            <MyPostsContainer/>
        </section>
    );
}

export default Profile;