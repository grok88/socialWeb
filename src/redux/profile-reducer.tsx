import {v1} from "uuid";
import {ProfileInfoType} from "../components/profile/profileInfo/profileInfo";
import {AppRootState, ObjPostType} from "./redux-store";
import {SWActionType, ThunkType} from "./users-reducer";
import {ThunkDispatch} from "redux-thunk";
import {profileApi, userApi} from "../api/api";


// TS profileReducer
export type AddPostACType = {
    type: 'ADD-POST';
    value: string;
}
export type DeletePostACType = {
    type: 'DELETE-POST';
    postId: string;
}

export type SetUserProfileType = {
    type: 'SET-USER-PROFILE';
    profile: any;
}
export type SetUserStatusType = {
    type: 'SET-USER-STATUS';
    status: string;
}

export type profileReducerType = AddPostACType | SetUserProfileType | SetUserStatusType | DeletePostACType;
export type ProfileReducerInitialStateType = {
    posts: Array<ObjPostType>;
    profile: ProfileInfoType | null;
    status: string;
}

let InitialState: ProfileReducerInitialStateType = {
    posts: [
        {id: v1(), message: 'Hello, What are you doing?', likeCount: '5'},
        {id: v1(), message: 'Hi, I am learning TypeScript now.', likeCount: '13'},
    ],
    profile: null,
    status: ''
}

const profileReducer = (state: ProfileReducerInitialStateType = InitialState, action: profileReducerType): ProfileReducerInitialStateType => {
    switch (action.type) {
        // добавление нового поста
        case 'ADD-POST' :
            let stateCopy = {
                ...state,
                posts: [...state.posts]
            }
            const newPost: ObjPostType = {
                id: v1(),
                message: action.value,
                likeCount: "0"
            }
            stateCopy.posts.push(newPost);
            return stateCopy;
        case "DELETE-POST":
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'SET-USER-STATUS':
            return {
                ...state,
                status: action.status
            }
        default :
            return state;
    }
}

export const addPostAC = (value: string): AddPostACType => {
    return {
        type: 'ADD-POST',
        value
    }
}
export const deleteAC = (postId: string): DeletePostACType => {
    return {
        type: 'DELETE-POST',
        postId
    }
}

export const setUserProfile = (profile: ProfileInfoType): SetUserProfileType => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    }
}
export const setUserStatus = (status: string): SetUserStatusType => {
    return {
        type: 'SET-USER-STATUS',
        status
    }
}

//thunk
export const getUserProfile = (userId: string): ThunkType => (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>) => {
    userApi.getUserProfileById(userId)
        .then(res => {
            dispatch(setUserProfile(res.data));
        });
}

export const getUserStatus = (userID: string): ThunkType => {
    return (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>) => {
        profileApi.getStatus(userID)
            .then(resp => {
                dispatch(setUserStatus(resp.data));
            })
    }
}
export const updateUserStatus = (status: string): ThunkType => {
    return (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>) => {
        profileApi.updateStatus(status)
            .then(resp => {
                if (resp.data.resultCode === 0) {
                    dispatch(setUserStatus(resp.data));
                }
            })
    }
}

export default profileReducer;