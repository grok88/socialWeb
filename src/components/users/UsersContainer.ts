import {connect} from "react-redux";
import UsersAPIComponent from "./UsersClass";
import {AppRootState} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleIsFetching,
    unFollow,
    toggleFollowingInProgress,
    UsersReducerInitialStateType, UserType
} from "../../redux/users-reducer";

type MapStateToPropsType = UsersReducerInitialStateType;
type MapDispatchToPropsType = {
    follow: (userId: string) => void;
    unFollow: (userId: string) => void;
    setUsers: (users: Array<UserType>) => void;
    setCurrentPage: (currentPage: number) => void;
    setUsersTotalCount: (totalCount: number) => void;
    toggleIsFetching: (isFetching: boolean) => void;
    toggleFollowingInProgress: (isFetching: boolean, userId: string) => void;
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
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching,
    toggleFollowingInProgress
})(UsersAPIComponent);