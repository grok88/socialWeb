import React from 'react';
import style from './profileInfo.module.css';
import Preloader from "../../../assets/preloader/Preloader";

type ProfileInfoType = {
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
    }
}
const ProfileInfo = (props: ProfileInfoType) => {
    const {profile} = props;
    console.log(props.profile)
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
                <img src={profile.photos.small} alt="user photo"/>
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