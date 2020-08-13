import {connect} from "react-redux";
import Friends from "./Friends";
import {AppRootState} from "../../../redux/redux-store";
import {setStatusFriends, setUsersFriends} from "../../../redux/navbar-reducer";
import {UserType} from "../../../redux/users-reducer";


type MapStateToPropsType = {
    users: Array<UserType>;
    status: string;
}

type MapDispatchToPropsType = {
    setStatusFriends: (status: string) => void;
    setUsersFriends: (users: Array<UserType>) => void;
}
const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
    return {
        users: state.sidebar.users,
        status: state.sidebar.status
    }
}

const FriendsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootState>(mapStateToProps, {
    setStatusFriends,
    setUsersFriends,
})(Friends);
export default FriendsContainer;