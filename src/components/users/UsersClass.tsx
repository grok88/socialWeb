import React, {useEffect, useState} from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import {UsersSearchForm} from './UsersSearchForm';
import {follow, requestUsers, unfollow, UsersReducerFilterType} from '../../redux/users-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {
    getCurrentPage,
    getFilter,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../redux/users-selectors';

//
// export type UsersAPIComponentPropsType = {
//     users: Array<UserType>;
//     followSuccess: (userId: string) => void;
//     unFollowSuccess: (userId: string) => void    ;
//     // setUsers: (users: Array<UserType>) => void;
//     pageSize: number;
//     totalUsersCount: number;
//     currentPage: number;
//     setCurrentPage: (currentPage: number) => void;
//     setUsersTotalCount: (totalCount: number) => void;
//     isFetching: boolean;
//     // toggleIsFetching: (isFetching: boolean) => void;
//     followingInProgress: Array<string>;
//     // toggleFollowingInProgress: (isFetching: boolean, userId: string) => void;
//     getUsers: (currentPage: number, pageSize: number, filter: UsersReducerFilterType) => void;
//     follow: (userId: string) => void;
//     unfollow: (userId: string) => void;
//     filter: UsersReducerFilterType
// }
//
// class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType> {
//     // state = {
//     //     portionNumber: 1
//     // }
//     //
//     // componentDidMount() {
//     //     this.props.getUsers(this.props.currentPage, this.props.pageSize, this.props.filter);
//     // }
//
//     // changedPage = (pageNumber: number) => {
//     //     this.props.getUsers(pageNumber, this.props.pageSize, this.props.filter);
//     // }
//
//     // setPortionNumber = (portionNum: number) => {
//     //     this.setState({
//     //         portionNumber: portionNum
//     //     })
//     // }
//     // changeFilter = (filter: UsersReducerFilterType) => {
//     //     this.props.getUsers(1, this.props.pageSize, filter);
//     // }
//
//     render() {
//         return <>
//             {this.props.isFetching
//                 ? <Preloader/>
//                 : <Users changedPage={this.changedPage}
//                          currentPage={this.props.currentPage}
//                          followSuccess={this.props.followSuccess}
//                          unFollowSuccess={this.props.unFollowSuccess}
//                          pageSize={this.props.pageSize}
//                          usersPage={this.props.users}
//                          totalUsersCount={this.props.totalUsersCount}
//                          followingInProgress={this.props.followingInProgress}
//                          follow={this.props.follow}
//                          unfollow={this.props.unfollow}
//                          portionNumber={this.state.portionNumber}
//                          setPortionNumber={this.setPortionNumber}
//                          changeUsersFilter={this.changeFilter}
//                 />}
//         </>
//     }
// }
//
// export default UsersAPIComponent;
//
// export type UsersPropsType = {
//     usersPage: Array<UserType>;
//     followSuccess: (userId: string) => void;
//     unFollowSuccess: (userId: string) => void;
//     // pageSize: number;
//     // totalUsersCount: number;
//     // currentPage: number;
//     changedPage: (pageNumber: number) => void;
//     followingInProgress: Array<string>;
//     follow: (userId: string) => void;
//     unfollow: (userId: string) => void;
//     portionNumber: number;
//     setPortionNumber: (portionNum: number) => void;
//     changeUsersFilter: (filter: UsersReducerFilterType) => void;
// }

export const Users = () => {
    const [portionNumber,setPortionNumber ] = useState<number>(1);
    const pageSize = useSelector(getPageSize);
    const totalUsersCount = useSelector(getTotalUsersCount);
    const currentPage = useSelector(getCurrentPage);
    const filter = useSelector(getFilter);
    const users = useSelector(getUsers);


    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(requestUsers(currentPage, pageSize, filter));
    }, []);

    const changeFilter = (filter: UsersReducerFilterType) => {
        dispatch(requestUsers(1, pageSize, filter));
    }

    const changedPage = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter));
    }


    return (
        <div>
            <UsersSearchForm changeFilter={changeFilter}/>
            <Paginator portionNumber={portionNumber} pageSize={pageSize} totalItemsCount={totalUsersCount}
                       currentPage={currentPage}
                       changedPage={changedPage} portionSize={10} setPortionNumber={setPortionNumber}/>
            {
                users.map(user => {
                    const unFollowHandler = () => {
                        dispatch(unfollow(user.id));
                    }
                    const followHandler = () => {
                        dispatch(follow(user.id));
                    }
                    return (
                        <User user={user} follow={followHandler} unfollow={unFollowHandler} key={user.id}/>
                    );
                })
            }
        </div>
    );
}



