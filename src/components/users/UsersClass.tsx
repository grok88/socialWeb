import React from "react";
import {userType} from "../../redux/users-reducer";
import axios from 'axios'
import userPhoto from '../../assets/images/green.png'
import API from '../../assets/api';

export type UsersPropsType = {
    usersPage: Array<userType>,
    follow: (userId: string) => void,
    unFollow: (userId: string) => void,
    setUsers: (users: Array<userType>) => void,
}

class Users extends React.Component<UsersPropsType, any> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                this.props.setUsers(res.data.items);
            });
        // this.getUsers();
        // this.me();
        // this.getCapcha();
    }

    componentWillUnmount() {
        this.props.setUsers([]);
        console.log('unmount');
        console.log(this.props.usersPage)
    }

    getUsers() {
        API.get('users')
            .then(res => {
                console.log(res.data.items);
                console.log(res);
            })
    }

    me(){
        API.get('/auth/me')
            .then(res =>  console.log(res.data));
    }
    getCapcha(){
        API.get('security/get-captcha-url')
            .then(res =>  console.log(res.data));;
    }

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
                                             alt="user-avatar" width={100} height={100}/>
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