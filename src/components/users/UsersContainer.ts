import {connect} from "react-redux";
import UsersAPIComponent from "./UsersClass";
import {AppRootState} from "../../redux/redux-store";
import {
    followSuccess,
    getUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleFollowingInProgress,
    unFollowSuccess,
    follow,
    unfollow,
    UsersReducerInitialStateType
} from "../../redux/users-reducer";

type MapStateToPropsType = UsersReducerInitialStateType;
type MapDispatchToPropsType = {
    followSuccess: (userId: string) => void;
    unFollowSuccess: (userId: string) => void;
    // setUsers: (users: Array<UserType>) => void;
    setCurrentPage: (currentPage: number) => void;
    setUsersTotalCount: (totalCount: number) => void;
    // toggleIsFetching: (isFetching: boolean) => void;
    toggleFollowingInProgress: (isFetching: boolean, userId: string) => void;
    getUsers: (currentPage: number, pageSize: number) => void;
    follow: (userId: string) => void;
    unfollow: (userId: string) => void;
}

let mapStateToProps = (state: AppRootState): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
// let mapDispatchToProps = (dispatch: any) => {
//     return {
//         follow: (userId: string) => {
//             dispatch(followAC(userId))
//         },
//         unFollow: (userId: string) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(SetCurrentPageAC(currentPage));
//         },
//         setUsersTotalCount: (totalCount: number) => {
//             dispatch(setUsersTotalCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootState>(mapStateToProps, {
    followSuccess,
    unFollowSuccess,
    setCurrentPage,
    setUsersTotalCount,
    toggleFollowingInProgress,
    getUsers,
    follow,
    unfollow
})(UsersAPIComponent);