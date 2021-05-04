import React from 'react';
import style from './profile.module.css';
import ProfileInfo from "./profileInfo/profileInfo";
import MyPostsContainer from "./my-posts/myPostsContainer";
import {ProfileDataFormType} from "./profileInfo/ProfileDataForm/ProfileDataForm";
import { Row } from 'antd';

type propsType = {
    getUserProfile: (userId: string) => void,
    profile: any;
    status: string;
    updateUserStatus: (status: string) => void;
    isOwner: boolean
    onUploadImg: (file: any) => void;
    saveProfile: (profile: ProfileDataFormType) => void;
}

// FC<ProfileContainerProps>
const Profile = (props: propsType) => {
    return (
        <Row className={style.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}
                         isOwner={props.isOwner} onUploadImg={props.onUploadImg} saveProfile={props.saveProfile}/>
            <MyPostsContainer/>
        </Row>
    );
}

export default Profile;