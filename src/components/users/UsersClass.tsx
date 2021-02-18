import React from 'react';
import Preloader from '../../assets/preloader/Preloader';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import {UserType} from '../../types/types';
import {UsersSearchForm} from './UsersSearchForm';
import {UsersReducerFilterType} from '../../redux/users-reducer';


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
    getUsers: (currentPage: number, pageSize: number, filter: UsersReducerFilterType) => void;
    follow: (userId: string) => void;
    unfollow: (userId: string) => void;
    filter: UsersReducerFilterType
}

class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType> {
    state = {
        portionNumber: 1
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize, this.props.filter);
    }

    changedPage = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize, this.props.filter);
    }

    setPortionNumber = (portionNum: number) => {
        this.setState({
            portionNumber: portionNum
        })
    }
    changeFilter = (filter: UsersReducerFilterType) => {
        this.props.getUsers(1, this.props.pageSize, filter);
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
                         portionNumber={this.state.portionNumber}
                         setPortionNumber={this.setPortionNumber}
                         changeUsersFilter={this.changeFilter}
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
    follow: (userId: string) => void;
    unfollow: (userId: string) => void;
    portionNumber: number;
    setPortionNumber: (portionNum: number) => void;
    changeUsersFilter: (filter: UsersReducerFilterType) => void;
}

const Users = (props: UsersPropsType) => {
    const {pageSize, totalUsersCount, currentPage, changedPage, portionNumber, setPortionNumber, changeUsersFilter} = props;
    return (
        <div>
            <UsersSearchForm changeFilter={changeUsersFilter}/>
            <Paginator portionNumber={portionNumber} pageSize={pageSize} totalItemsCount={totalUsersCount}
                       currentPage={currentPage}
                       changedPage={changedPage} portionSize={10} setPortionNumber={setPortionNumber}/>
            {
                props.usersPage.map(user => {
                    const unFollowHandler = () => {
                        props.unfollow(user.id);
                    }
                    const followHandler = () => {
                        props.follow(user.id);
                    }
                    return (
                        <User user={user} follow={followHandler} unfollow={unFollowHandler} key={user.id}/>
                    );
                })
            }
        </div>
    );
}



