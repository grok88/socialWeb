import React from "react";
import {UserType} from "../../redux/users-reducer";
import userPhoto from '../../assets/images/green.png'
import style from './UsersClass.module.css'
import Preloader from "../../assets/preloader/Preloader";
import {NavLink} from "react-router-dom";
import {userApi} from "../../api/api";

export type UsersAPIComponentPropsType = {
    users: Array<UserType>;
    follow: (userId: string) => void;
    unFollow: (userId: string) => void;
    setUsers: (users: Array<UserType>) => void;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    setCurrentPage: (currentPage: number) => void;
    setUsersTotalCount: (totalCount: number) => void;
    isFetching: boolean;
    toggleIsFetching: (isFetching: boolean) => void;
    followingInProgress: Array<string>;
    toggleFollowingInProgress: (isFetching: boolean, userId: string) => void;
}

class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        userApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setUsersTotalCount(data.totalCount);
            });
    }

    changedPage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        userApi.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
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
                         usersPage={this.props.users}
                         totalUsersCount={this.props.totalUsersCount}
                         followingInProgress={this.props.followingInProgress}
                         toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                />}
        </>
    }
}

export default UsersAPIComponent;

export type UsersPropsType = {
    usersPage: Array<UserType>;
    follow: (userId: string) => void;
    unFollow: (userId: string) => void;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    changedPage: (pageNumber: number) => void;
    followingInProgress: Array<string>;
    toggleFollowingInProgress: (isFetching: boolean, userId: string) => void;
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
                    const unFollowHandler = () => {
                        console.log(props.followingInProgress)
                        props.toggleFollowingInProgress(true, user.id);
                        userApi.unFollow(user.id)
                            .then(data => {
                                console.log(props.followingInProgress)
                                props.toggleFollowingInProgress(false, user.id);
                                if (data.resultCode === 0) {
                                    props.unFollow(user.id);
                                }
                            });
                    }
                    const followHandler = () => {
                        console.log(props.followingInProgress)
                        props.toggleFollowingInProgress(true, user.id);
                        userApi.follow(user.id)
                            .then(data => {
                                console.log(props.followingInProgress)
                                props.toggleFollowingInProgress(false, user.id);
                                if (data.resultCode === 0) {
                                    console.log('follow');
                                    props.follow(user.id);
                                }
                            });
                    }
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
                                    ? <button onClick={unFollowHandler}
                                              disabled={props.followingInProgress.some(id => id === user.id)}>unfollow</button>
                                    : <button onClick={followHandler}
                                              disabled={props.followingInProgress.some(id => id === user.id)}>follow</button>}
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