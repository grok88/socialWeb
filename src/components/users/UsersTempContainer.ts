import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import UsersTemp from "./UsersTemp";
import {setStatusAC, setUsersAC, setUsersCurrentPageAC, usersTempReducerType} from "../../redux/usersTemp-reducer";

const mapStateToProps = (state: StateType) => {
    return {
        usersTemp: state.usersPageTemp.usersTemp,
        status: state.usersPageTemp.status,
        currentPage: state.usersPageTemp.currentPage,
        pageSize: state.usersPageTemp.pageSize,
        totalUserTempCount: state.usersPageTemp.totalUserTempCount
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        setUsers: (usersTemp: Array<usersTempReducerType>) => {
            dispatch(setUsersAC(usersTemp));
        },
        setStatus: (status: string) => {
            dispatch(setStatusAC(status))
        },
        setCurrentPage: (curretPage: number) => {
            dispatch(setUsersCurrentPageAC(curretPage))
        }
    }
}

const UsersTempContainer = connect(mapStateToProps, mapDispatchToProps)(UsersTemp);
export default UsersTempContainer;