import React from 'react';
import style from './profileInfo.module.css';
import Preloader from "../../../assets/preloader/Preloader";
import userPhoto from '../../../assets/images/green.png'
import {ProfileStatus} from './profilestatus/ProfileStatus';
import {ProfileStatusWithHooks} from "./profilestatus/ProfileStatusWithHooks";

export type ProfileInfoType = {
    profile: {
        aboutMe: string,
        contacts: {
            [key: string]: string
        },
        lookingForAJob: boolean,
        lookingForAJobDescription: string,
        fullName: string,
        userId: number,
        photos: {
            small: string,
            large: string
        }
    },
    status: string;
    updateUserStatus: (status: string) => void;
}
const ProfileInfo = (props: ProfileInfoType) => {
    const {profile} = props;
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={style.profileInfo}>
            <div>
                <img
                    src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
                    alt="main-fon"/>
            </div>

            <div className={style.description}>
                <div>
                    <img src={profile.photos.small !== null ? profile.photos.small : userPhoto} alt="user avator"
                         width={100}/>
                </div>
                <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                <div>
                    <p>Name : {profile.fullName}</p>
                    <p>Description : {profile.aboutMe}</p>
                    <p>lookingForAJobDescription : {profile.lookingForAJobDescription}</p>
                </div>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;