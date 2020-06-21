import React, {useEffect} from "react";
import {userType} from "../../redux/users-reducer";
import {v1} from "uuid";

export type UsersPropsType = {
    usersPage: Array<userType>,
    follow: (userId: string) => void,
    unFollow: (userId: string) => void,
    setUsers: (users: Array<userType>) => void,
}
const Users = (props: UsersPropsType) => {
    const {follow, unFollow, setUsers, usersPage} = props;

    useEffect(() => {
        setUsers([
            {
                id: v1(),
                userUrl: 'https://www.dw.com/image/47372909_303.jpg',
                followed: false,
                name: 'Alex',
                status: 'I am big',
                location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                id: v1(),
                userUrl: 'https://www.dw.com/image/47372909_303.jpg',
                followed: true,
                name: 'Sergey',
                status: 'I am big too',
                location: {country: 'Belarus', city: 'Pinsk'}
            },
            {
                id: v1(),
                userUrl: 'https://www.dw.com/image/47372909_303.jpg',
                followed: false,
                name: 'Sveta',
                status: 'I am big so so',
                location: {country: 'Belarus', city: 'Vitebsk'}
            }
        ]);
    }, []);

    return (
        <div>
            {
                usersPage.map(user => {
                    return (
                        <div key={user.id}>
                            <div>
                                <div>
                                    <img src={user.userUrl} alt="user=avator" width={150} height={100}/>
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
                                    <span>{user.location.country}</span>
                                    <span>{user.location.city}</span>
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