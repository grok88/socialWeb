import {connect} from "react-redux";
import UsersAPIComponent from "./UsersClass";
import {StateType} from "../../redux/redux-store";
import {
    followAC,
    setUsersAC,
    unFollowAC,
    UserType,
    SetCurrentPageAC,
    setUsersTotalCountAC
} from "../../redux/users-reducer";

let mapStateToProps = (state: StateType) => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: string) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(SetCurrentPageAC(currentPage));
        },
        setUsersTotalCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);