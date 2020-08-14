import React from "react";
import style from './Friend.module.css';
import userImg from '../../../../assets/images/user.png';
import {UserType} from "../../../../redux/users-reducer";

type PropsType = {
    user: UserType;
}

const Friend = (props: PropsType) => {
    const {user: {photos, name, status}} = props;
    return (
        <div className={style.friend}>
            <img
                src={photos.small ? photos.small : userImg}
                alt={`friend_${name}`} width={50} height={50}/>
            <p>{name}</p>
            <p>{status ? status : 'no status'}</p>
        </div>
    );
}

export default Friend;