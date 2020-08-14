import {addPostAC, ProfileReducerInitialStateType, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./myPosts";
import {connect} from "react-redux";
import {AppRootState} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type ObjType = {
    id: string,
    message: string,
    likeCount: string
}

type MapStateToPropsType = {
    profilePage: ProfileReducerInitialStateType
}

type MapDispatchToPropsType = {
    addPost: () => void;
    changeNewPostText: (text: string) => void;
}

let mapStateToProps = (state: AppRootState): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC());
        },
        changeNewPostText: (value: string) => {
            dispatch(updateNewPostTextAC(value));
        }
    }
}

const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootState>(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;