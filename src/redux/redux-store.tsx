import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import { reducer as formReducer } from 'redux-form'

// import thunk as thunkMiddleware from 'redux-thunk';
import thunkMiddleware from 'redux-thunk'
import { appReducer } from "./app-reducer";

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

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app:appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

 export type AppRootState = ReturnType<typeof reducers>;

// @ts-ignore
window.store = store;

export default store;