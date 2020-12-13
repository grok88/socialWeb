import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import {reducer as formReducer} from 'redux-form'
// import thunk as thunkMiddleware from 'redux-thunk';
import thunkMiddleware from 'redux-thunk'
import {appReducer} from "./app-reducer";

export type MessagesType = {
    id: string,
    message: string
}


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)));

//1 way
// type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never ;
// export type InferActionsType<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>;

//2 way
export type InferActionsType<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;


export type AppRootState = ReturnType<typeof reducers>;

// @ts-ignore
window.store = store;

export default store;
