import React from "react";
import {UserType} from "../../redux/users-reducer";
import userPhoto from '../../assets/images/green.png'
import style from './UsersClass.module.css'
import Preloader from "../../assets/preloader/Preloader";
import {NavLink} from "react-router-dom";

export type UsersAPIComponentPropsType = {
    users: Array<UserType>;
    followSuccess: (userId: string) => void;
    unFollowSuccess: (userId: string) => void;
    // setUsers: (users: Array<UserType>) => void;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    setCurrentPage: (currentPage: number) => void;
    setUsersTotalCount: (totalCount: number) => void;
    isFetching: boolean;
    // toggleIsFetching: (isFetching: boolean) => void;
    followingInProgress: Array<string>;
    // toggleFollowingInProgress: (isFetching: boolean, userId: string) => void;
    getUsers: (currentPage: number, pageSize: number) => void;
    follow: (userId: string) => void;
    unfollow: (userId: string) => void;
}

class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    changedPage = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Users changedPage={this.changedPage}
                         currentPage={this.props.currentPage}
                         followSuccess={this.props.followSuccess}
                         unFollowSuccess={this.props.unFollowSuccess}
                         pageSize={this.props.pageSize}
                         usersPage={this.props.users}
                         totalUsersCount={this.props.totalUsersCount}
                         followingInProgress={this.props.followingInProgress}
                         follow={this.props.follow}
                         unfollow={this.props.unfollow}
                />}
        </>
    }
}

export default UsersAPIComponent;

export type UsersPropsType = {
    usersPage: Array<UserType>;
    followSuccess: (userId: string) => void;
    unFollowSuccess: (userId: string) => void;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    changedPage: (pageNumber: number) => void;
    followingInProgress: Array<string>;
    // toggleFollowingInProgress: (isFetching: boolean, userId: string) => void;
    follow: (userId: string) => void;
    unfollow: (userId: string) => void;
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
                        props.unfollow(user.id);
                    }
                    const followHandler = () => {
                        props.follow(user.id);
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