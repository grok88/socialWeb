import React, {ChangeEvent, useState} from 'react';
import style from './profileInfo.module.css';
import Preloader from '../../../assets/preloader/Preloader';
import userPhoto from '../../../assets/images/green.png'
import {ProfileStatus} from './profilestatus/ProfileStatus';
import ProfileDataFormRedux, {ProfileDataFormType} from './ProfileDataForm/ProfileDataForm';
import {Col, Image, Row} from 'antd';

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
        <Col span={24} className={style.profileInfo}>
            <Row gutter={8}>
                <Col
                    md={{span: 24}}
                    lg={{span: 8}}
                >
                    <div className={`${style.panel} ${style.panelDefault}`}>
                        <div className={`${style.panelHeading}`}>
                            <header className={`${style.panelTitle}`}>
                                <strong>Пользователь сайта</strong>
                            </header>
                        </div>
                        <div className={`${style.panelBody}`}>
                            <Image
                                // width={200}
                                src={profile.photos.large !== null ? profile.photos.large : userPhoto}
                                alt='User avator'
                            />
                            <h3>{profile.fullName}</h3>
                            <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                        </div>
                    </div>
                </Col>
                <Col
                    md={{span: 24}}
                    lg={{span: 16}}
                >
                    <div className={`${style.panel}`}>
                        <div className={`${style.panelBody}`}>
                            <div className={`${style.panelBtn}`}>
                                {
                                    props.isOwner &&
                                    <div>
                                        <h3>Изменить аватар пользователя</h3>
                                        <input type="file" onChange={onUploadImg}/>
                                    </div>
                                }
                                <hr/>
                            </div>
                            {
                                editMode ?
                                    <ProfileDataFormRedux onSubmit={onSubmit} initialValues={profile}
                                                          profile={profile}/> :
                                    <ProfileData profile={profile} isOwner={props.isOwner}
                                                 goToEditMode={() => setEditMode(true)}/>
                            }
                        </div>
                    </div>
                </Col>
            </Row>

        </Col>
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
        <h3>Профайл пользователя</h3>
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
        {isOwner &&
        <div>
            <button onClick={goToEditMode}>Edit profile</button>
        </div>
        }
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
        <b>{contactTitle}</b>: {contactValue ? contactValue : 'Пользователь не зарегистрирован'}
    </div>
}