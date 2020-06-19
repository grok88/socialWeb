import {
    addFriendsAC,
    addNameToNewFriendsAC,
    addUrlToNewFriendsAC
} from "../../redux/navbar-reducer";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import Sidebar from "./sidebar";

let mapStateToProps = (state: StateType) => {
    return {
        sidebar: state.sidebar
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addFriends: () => {
            dispatch(addFriendsAC());
        },
        addNameToNewFriends: (value: string) => {
            dispatch(addNameToNewFriendsAC(value));
        },
        addUrlToNewFriends: (value: string) => {
            dispatch(addUrlToNewFriendsAC(value));
        }
    }
}
export  const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);