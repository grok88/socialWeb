import {v1} from "uuid";
import {ProfileInfoType} from "../components/profile/profileInfo/profileInfo";
import {AppRootState, ObjPostType} from "./redux-store";
import {SWActionType, ThunkType} from "./users-reducer";
import {ThunkDispatch} from "redux-thunk";
import {userApi} from "../api/api";


// TS profileReducer
export type AddPostACType = {
    type: 'ADD-POST'
}
export type UpdateNewPostTextACType = {
    type: 'UPDATE-NEW-POST-TEXT',
    text: string
}
export type SetUserProfileType = {
    type: 'SET-USER-PROFILE',
    profile: any
}

export type profileReducerType = AddPostACType | UpdateNewPostTextACType | SetUserProfileType;
export type ProfileReducerInitialStateType = {
    posts: Array<ObjPostType>,
    newPostText: string,
    profile: ProfileInfoType | null
}

let InitialState: ProfileReducerInitialStateType = {
    posts: [
        {id: v1(), message: 'Hello, What are you doing?', likeCount: '5'},
        {id: v1(), message: 'Hi, I am learning TypeScript now.', likeCount: '13'},
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state: ProfileReducerInitialStateType = InitialState, action: profileReducerType):ProfileReducerInitialStateType => {
    switch (action.type) {
        // добавление нового поста
        case 'ADD-POST' :
            let stateCopy = {
                ...state,
                posts: [...state.posts]
            }
            const newPost: ObjPostType = {
                id: v1(),
                message: stateCopy.newPostText,
                likeCount: "0"
            }
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        // контролируемое добавление поста
        case 'UPDATE-NEW-POST-TEXT' :
            return {
                ...state,
                newPostText: action.text
            };
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        default :
            return state;
    }
}

export const addPostAC = (): AddPostACType => {
    return {
        type: 'ADD-POST'
    }
}
export const updateNewPostTextAC = (text: string): UpdateNewPostTextACType => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        text: text
    }
}
export const setUserProfile = (profile: ProfileInfoType): SetUserProfileType => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    }
}
export const getUserProfile = (userId:string):ThunkType => (dispatch:ThunkDispatch<AppRootState, unknown, SWActionType>) => {
    userApi.getUserProfileById(userId)
        .then(res => {
            dispatch(setUserProfile(res.data));
        });
}
export default profileReducer;