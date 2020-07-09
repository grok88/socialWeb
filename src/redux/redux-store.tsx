import {combineReducers, createStore} from "redux";
import profileReducer, {ProfileReducerInitialStateType} from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import {DialogItemType} from "../components/dialogs/dialogItem/dialogItem";
import {FriendsType} from "../components/nav/friends/Friends";
import usersReducer, {UsersReducerInitialStateType} from "./users-reducer";
import usersTempReducer, {UsersTempReducerInitialStateType} from "./usersTemp-reducer";
import authReducer, {AuthReducerTypeInitialStateType} from "./auth-reducer";

export type MessagesType = {
    id: string,
    message: string
}

// Для постов
export type ObjPostType = {
    id: string,
    message: string,
    likeCount: string
}

export type StateType = {
    profilePage: ProfileReducerInitialStateType,
    dialogsPage: {
        dialogs: Array<DialogItemType>,
        messages: Array<MessagesType>,
        newMessageText: string
    },
    sidebar: {
        friends: Array<FriendsType>
        addFriends: FriendsType
    },
    usersPage: UsersReducerInitialStateType,
    usersPageTemp: UsersTempReducerInitialStateType,
    auth: AuthReducerTypeInitialStateType
}


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: navbarReducer,
    usersPage: usersReducer,
    usersPageTemp: usersTempReducer,
    auth: authReducer
});

let store = createStore(reducers);

// export type StateType = ReturnType<typeof reducers>;

// @ts-ignore
window.store = store;

export default store;