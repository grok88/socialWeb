import {useSelector} from 'react-redux';
import {Users} from './UsersClass';

import {getIsFetching} from '../../redux/users-selectors';
import Preloader from '../../assets/preloader/Preloader';
import React from 'react';

// type MapStateToPropsType = UsersReducerInitialStateType;
// type MapDispatchToPropsType = {
//     followSuccess: (userId: string) => void;
//     unFollowSuccess: (userId: string) => void;
//     // setUsers: (users: Array<UserType>) => void;
//     setCurrentPage: (currentPage: number) => void;
//     setUsersTotalCount: (totalCount: number) => void;
//     // toggleIsFetching: (isFetching: boolean) => void;
//     toggleFollowingInProgress: (isFetching: boolean, userId: string) => void;
//     getUsers: (currentPage: number, pageSize: number, filter: UsersReducerFilterType) => void;
//     follow: (userId: string) => void;
//     unfollow: (userId: string) => void;
// }


//with selectors
// let mapStateToProps = (state: AppRootState): MapStateToPropsType => {
//     return {
//         users: getUsers(state),
//         // pageSize: getPageSize(state),
//         // totalUsersCount: getTotalUsersCount(state),
//         // currentPage: getCurrentPage(state),
//         // isFetching: getIsFetching(state),
//         followingInProgress: getFollowingInProgress(state),
//         // filter: getFilter(state),
//     }
// }


// export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootState>(mapStateToProps, {
//     followSuccess: actions.followSuccess,
//     unFollowSuccess: actions.unFollowSuccess,
//     setCurrentPage: actions.setCurrentPage,
//     setUsersTotalCount: actions.setUsersTotalCount,
//     toggleFollowingInProgress: actions.toggleFollowingInProgress,
//     getUsers: requestUsers,
//     follow,
//     unfollow
// })(UsersAPIComponent);


export const UsersPage: React.FC = () => {
    const isFetching = useSelector(getIsFetching);
    return <>
        {isFetching
            ? <Preloader/>
            : null}
        <Users/>
    </>
}