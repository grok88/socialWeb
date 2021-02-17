import {connect} from "react-redux";
import UsersAPIComponent from "./UsersClass";
import {AppRootState} from "../../redux/redux-store";
import {
    follow,
    requestUsers,
    unfollow,
    actions,
    UsersReducerInitialStateType
} from "../../redux/users-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getFilter
} from "../../redux/users-selectors";

type MapStateToPropsType = UsersReducerInitialStateType;
type MapDispatchToPropsType = {
    followSuccess: (userId: string) => void;
    unFollowSuccess: (userId: string) => void;
    // setUsers: (users: Array<UserType>) => void;
    setCurrentPage: (currentPage: number) => void;
    setUsersTotalCount: (totalCount: number) => void;
    // toggleIsFetching: (isFetching: boolean) => void;
    toggleFollowingInProgress: (isFetching: boolean, userId: string) => void;
    getUsers: (currentPage: number, pageSize: number,term: string) => void;
    follow: (userId: string) => void;
    unfollow: (userId: string) => void;
}

// let mapStateToProps = (state: AppRootState): MapStateToPropsType => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

//with selectors
let mapStateToProps = (state: AppRootState): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filter: getFilter(state),
    }
}


export default withAuthRedirect(connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootState>(mapStateToProps, {
    followSuccess: actions.followSuccess,
    unFollowSuccess: actions.unFollowSuccess,
    setCurrentPage: actions.setCurrentPage,
    setUsersTotalCount: actions.setUsersTotalCount,
    toggleFollowingInProgress:actions.toggleFollowingInProgress,
    getUsers: requestUsers,
    follow,
    unfollow
})(UsersAPIComponent));
