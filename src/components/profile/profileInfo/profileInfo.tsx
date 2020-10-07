import React, {ChangeEvent, useState} from 'react';
import style from './profileInfo.module.css';
import Preloader from "../../../assets/preloader/Preloader";
import userPhoto from '../../../assets/images/green.png'
import {ProfileStatus} from './profilestatus/ProfileStatus';
import ProfileDataFormRedux, {ProfileDataFormType} from "./ProfileDataForm/ProfileDataForm";

export type ProfileType = {
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

export type ProfileInfoPropsType = {
    profile: ProfileType,
    status: string;
    updateUserStatus: (status: string) => void;
    isOwner: boolean
    onUploadImg: (file: any) => void;
    saveProfile: (profile: ProfileDataFormType) => any;
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    const {profile, saveProfile} = props;

    const [editMode, setEditMode] = useState<boolean>(false);

    const onUploadImg = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            props.onUploadImg(e.target.files[0]);
        }
    }
    const onSubmit = (formData: ProfileDataFormType) => {
        saveProfile(formData)
            .then(() => {
                setEditMode(false);
            });

    }

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
                {
                    props.isOwner &&
					<div>
						<input type="file" onChange={onUploadImg}/>
					</div>
                }
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                {
                    editMode ? <ProfileDataFormRedux onSubmit={onSubmit} initialValues={profile} profile={profile}/> :
                        <ProfileData profile={profile} isOwner={props.isOwner} goToEditMode={() => setEditMode(true)}/>
                }
            </div>
        </div>
    );
}

export default ProfileInfo;


//Profile Data
type ProfileDataPropsType = {
    profile: ProfileType;
    isOwner: boolean;
    goToEditMode: () => void;
}

export const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner &&
		<div>
			<button onClick={goToEditMode}>Edit profile</button>
		</div>
        }
        <div>
            <b>Full name </b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job </b>: {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {
            profile.lookingForAJob &&
			<div>
				<b>Looking for a job description </b>: {profile.lookingForAJobDescription}
			</div>
        }
        <div>
            <b>About me </b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts </b>: {Object.keys(profile.contacts).map(key => <Contact contactTitle={key}
                                                                                 contactValue={profile.contacts[key]}
                                                                                 key={key}/>)}
        </div>

    </div>
}

//Contact
type ContactPropsType = {
    contactTitle: string;
    contactValue: string;
}

export const Contact: React.FC<ContactPropsType> = (props) => {
    const {contactTitle, contactValue} = props;
    return <div className={style.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}