import React from "react";
import {UserType} from "../../redux/users-reducer";
import axios from 'axios'
import userPhoto from '../../assets/images/green.png'
import API from '../../assets/api';
import style from './UsersClass.module.css'

export type UsersPropsType = {
    usersPage: Array<UserType>,
    follow: (userId: string) => void,
    unFollow: (userId: string) => void,
    setUsers: (users: Array<UserType>) => void,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    setCurrentPage: (currentPage: number) => void,
    setUsersTotalCount:(totalCount:number) => void
}

class Users extends React.Component<UsersPropsType, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.setUsersTotalCount(res.data.totalCount);
            });
    }

    changedPage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
            });
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div>
                    {
                        pages.map(p => <span key={p}
                                             className={this.props.currentPage === p ? style.selectedPage : ''}
                                             onClick={(e) => {
                                                 this.changedPage(p);
                                             }}>{p}
                        </span>)
                    }
                </div>
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