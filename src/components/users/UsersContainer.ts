import {connect} from "react-redux";
import Users from "./Users";
import {StateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unFollowAC, userType} from "../../redux/users-reducer";

let mapStateToProps = (state: StateType) => {
    return {
        usersPage: state.usersPage.users
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
        setUsers: (users: Array<userType>) => {
            dispatch(setUsersAC(users))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);