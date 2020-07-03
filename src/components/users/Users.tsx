import React, {useEffect} from "react";
import {UserType} from "../../redux/users-reducer";
import {v1} from "uuid";
import axios from 'axios'
import userPhoto from '../../assets/images/green.png'


export type UsersPropsType = {
    usersPage: Array<UserType>,
    follow: (userId: string) => void,
    unFollow: (userId: string) => void,
    setUsers: (users: Array<UserType>) => void,
}
const Users = (props: UsersPropsType) => {
    const {follow, unFollow, setUsers, usersPage} = props;

    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                setUsers(res.data.items);
            });
    }, []);

    return (
        <div>
            {
                usersPage.map(user => {
                    return (
                        <div key={user.id}>
                            <div>
                                <div>
                                    <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                                         alt="user-avatar" width={150} height={100}/>
                                </div>
                                {user.followed
                                    ? <button onClick={() => {
                                        unFollow(user.id)
                                    }}>unfollow</button>
                                    : <button onClick={() => {
                                        follow(user.id)
                                    }}>follow</button>}
                            </div>
                            <div>
                                <div>
                                    <span>{user.name}</span>
                                    <span>{user.status}</span>
                                </div>
                                <div>
                                    <span>{'user.location.country'}</span>
                                    <span>{'user.location.city'}</span>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Users;