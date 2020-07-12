import React from "react";
import {UserType} from "../../redux/users-reducer";
import axios from 'axios'
import userPhoto from '../../assets/images/green.png'
import style from './UsersClass.module.css'
import Preloader from "../../assets/preloader/Preloader";
import {NavLink} from "react-router-dom";

export type UsersAPIComponentPropsType = {
    usersPage: Array<UserType>,
    follow: (userId: string) => void,
    unFollow: (userId: string) => void,
    setUsers: (users: Array<UserType>) => void,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    setCurrentPage: (currentPage: number) => void,
    setUsersTotalCount: (totalCount: number) => void,
    isFetching: boolean,
    toggleIsFetching: (isFetching: boolean) => void
}

class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType, any> {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
            withCredentials:true
        })
            .then(res => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(res.data.items);
                this.props.setUsersTotalCount(res.data.totalCount);
            });
    }

    changedPage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials:true
        })
            .then(res => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(res.data.items);
            });
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Users changedPage={this.changedPage}
                         currentPage={this.props.currentPage}
                         follow={this.props.follow}
                         unFollow={this.props.unFollow}
                         pageSize={this.props.pageSize}
                         usersPage={this.props.usersPage}
                         totalUsersCount={this.props.totalUsersCount}
                />}
        </>
    }
}

export default UsersAPIComponent;

export type UsersPropsType = {
    usersPage: Array<UserType>,
    follow: (userId: string) => void,
    unFollow: (userId: string) => void,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    changedPage: (pageNumber: number) => void
}

const Users = (props: UsersPropsType) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {
                    pages.map(p => <span key={p}
                                         className={props.currentPage === p ? style.selectedPage : ''}
                                         onClick={(e) => {
                                             props.changedPage(p);
                                         }}>{p}
                        </span>)
                }
            </div>
            {
                props.usersPage.map(user => {
                    return (
                        <div key={user.id}>
                            <div>
                                <div>
                                    <NavLink to={'/profile/' + user.id}>
                                        <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                                             alt="user-avatar" width={100} height={100}/>
                                    </NavLink>

                                </div>
                                {user.followed
                                    ? <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                            withCredentials: true,
                                            headers:{
                                                "api-key" : "d957613d-94bb-4388-aef0-47e775e83ac5"
                                            }
                                        })
                                            .then(res => {
                                                if (res.data.resultCode === 0) {
                                                    props.unFollow(user.id);
                                                    console.log('unfollow');
                                                }
                                            });
                                    }}>unfollow</button>
                                    : <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "api-key": "d957613d-94bb-4388-aef0-47e775e83ac5"
                                            }
                                        })
                                            .then(res => {
                                                if (res.data.resultCode === 0) {
                                                    console.log('follow');
                                                    props.follow(user.id);
                                                }
                                            });
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