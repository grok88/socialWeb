import {connect} from "react-redux";
import {usersReducerInitialStateType} from "../../redux/users-reducer";
import {StateType} from "../../redux/redux-store";
import UsersTemp from "./UsersTemp";
import {usersTempReducerType, setUsersAC, setStatusAC} from "../../redux/usersTemp-reducer";

const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPageTemp.users,
        status: state.usersPageTemp.status
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        setUsers: (users: Array<usersTempReducerType>) => {
            dispatch(setUsersAC(users));
        },
        setStatus: (status: string) => {
            dispatch(setStatusAC(status))
        }
    }
}

const UsersTempContainer = connect(mapStateToProps, mapDispatchToProps)(UsersTemp);
export default UsersTempContainer;