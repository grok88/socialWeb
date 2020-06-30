import React from "react";
import {usersReducerInitialStateType} from "../../redux/users-reducer";
import userPhoto from '../../assets/images/green.png'
import style from './UsersTemp.module.css'
import {NavLink} from "react-router-dom";
import {statuses, usersTempReducerInitialStateType, usersTempReducerType} from "../../redux/usersTemp-reducer";
import API from '../../assets/api';

type usersTempPropsType = {
    status: string,
    users: Array<any>,
    setUsers: (users: Array<usersTempReducerType>) => void,
    setStatus: (status: string) => void
}
const UsersTemp = (props: usersTempPropsType) => {
    const {users = [], status,setStatus,setUsers} = props;

    if (status === statuses.NOT_INITIALAZED) {
        API.get('users')
            .then(res => {
                console.log(res.data.items);
                setStatus(statuses.SUCCESS);
                setUsers(res.data.items);
            })
        return <span>...</span>
    }

    return (
        <div>
            {!users.length && <span>Users not found</span>}
            {users.map(user => <div key={user.id} className={style.user}>
                <div>
                    <img src={user.photos.small ? user.photos.small : userPhoto} alt=""/>
                </div>
                <div>
                    <NavLink to={`usersTemp/${user.id}`}>{user.name}</NavLink>
                    <span>{user.status}</span>
                </div>
            </div>)}
        </div>
    )
}
export default UsersTemp;