import {v1} from "uuid";
import {ProfileInfoType} from "../components/profile/profileInfo/profileInfo";
import {AppRootState, ObjPostType} from "./redux-store";
import {SWActionType, ThunkType} from "./users-reducer";
import {ThunkDispatch} from "redux-thunk";
import {profileApi, userApi} from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const DELETE_POST = 'profile/DELETE-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_USER_STATUS = 'profile/SET-USER-STATUS';

// TS profileReducer
export type AddPostACType = ReturnType<typeof addPostAC>;
export type DeletePostACType = ReturnType<typeof deleteAC>;
export type SetUserProfileType = ReturnType<typeof setUserProfile>;
export type SetUserStatusType = ReturnType<typeof setUserStatus>;

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
        case ADD_POST :
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
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default :
            return state;
    }
}

export const addPostAC = (value: string) => {
    return {
        type: ADD_POST,
        value
    } as const;
}
export const deleteAC = (postId: string) => {
    return {
        type: DELETE_POST,
        postId
    } as const;
}
export const setUserProfile = (profile: ProfileInfoType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const;
}
export const setUserStatus = (status: string) => {
    return {
        type: SET_USER_STATUS,
        status
    } as const;
}

//thunk
export const getUserProfile = (userId: string): ThunkType => async (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>) => {
    const res = await userApi.getUserProfileById(userId);
    dispatch(setUserProfile(res.data));
}
export const getUserStatus = (userID: string): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>) => {
        const resp = await profileApi.getStatus(userID);
        dispatch(setUserStatus(resp.data));
    }
}
export const updateUserStatus = (status: string): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>) => {
        const resp = await profileApi.updateStatus(status);
        if (resp.data.resultCode === 0) {
            dispatch(setUserStatus(resp.data));
        }
    }
}

export default profileReducer;