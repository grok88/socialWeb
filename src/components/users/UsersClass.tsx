import React, {useEffect} from "react";
import {userType} from "../../redux/users-reducer";
import {v1} from "uuid";
import axios from 'axios'
import userPhoto from '../../assets/images/user.png'

export type UsersPropsType = {
    usersPage: Array<userType>,
    follow: (userId: string) => void,
    unFollow: (userId: string) => void,
    setUsers: (users: Array<userType>) => void,
}

class Users extends React.Component<UsersPropsType, any> {
    constructor(props:UsersPropsType) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                this.props.setUsers(res.data.items);
            });
    }
    // getUsers = () => {
    //     if(this.props.usersPage.length === 0){
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users')
    //             .then(res => {
    //                 this.props.setUsers(res.data.items);
    //             });
    //     }
    // }

    render() {
        return (
            <div>
                {/*<button onClick={this.getUsers}>Get Users</button>*/}
                {
                    this.props.usersPage.map(user => {
                        return (
                            <div key={user.id}>
                                <div>
                                    <div>
                                        <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                                             alt="user-avatar" width={150} height={100}/>
                                    </div>
                                    {user.followed
                                        ? <button onClick={() => {
                                            this.props.unFollow(user.id)
                                        }}>unfollow</button>
                                        : <button onClick={() => {
                                            this.props.follow(user.id)
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
}

export default Users;