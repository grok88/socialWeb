import React from "react";
import style from './Friends.module.css';
import Friend from "./friend/Friend";
import axios from 'axios'
import {statuses} from "../../../redux/navbar-reducer";
import {UserType} from "../../../types/types";


type PropsType = {
    users: Array<UserType>;
    status: string;
    setStatusFriends: (status: string) => void;
    setUsersFriends: (users: Array<UserType>) => void;
}

const Friends = (props: PropsType) => {
    if (props.status === statuses.NOT_INITIALIZED) {
        props.setStatusFriends(statuses.INPROGRESS);
        axios.get('https://social-network.samuraijs.com/api/1.0/users?count=4')
            .then(response => {
                props.setUsersFriends(response.data.items);
                props.setStatusFriends(statuses.SUCCESS);
            });
    }

    if (props.users.length === 0) {
        return <div>Users not found</div>
    }
    let friendsElement = props.users.map((user) => <Friend user={user} key={user.id}/>);

    return (
        <div className={style.friendsBlock}>
            <h2>Friends</h2>
            <div className={style.friends}>
                {friendsElement}
            </div>
        </div>
    );
}


export default Friends;