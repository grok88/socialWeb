import {v1} from "uuid";
import {ObjPostType} from "./state";

export const ACTION_CREATOR = {
    ADD_POST: 'ADD-POST',
    UPDATE_NEW_POST_TEXT: 'UPDATE-NEW-POST-TEXT',
    ADD_MESSAGE: 'ADD-MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT: 'UPDATE-NEW-MESSAGE-TEXT',
    ADD_NEW_FRIENDS_NAME: 'ADD-NEW-FRIENDS-NAME',
    ADD_NEW_FRIENDS_URL: 'ADD-NEW-FRIENDS-URL',
    ADD_FRIENDS: 'ADD-FRIENDS',
};
// TS profileReducer
export type addPostACType = {
    type: 'ADD-POST'
}
export type updateNewPostTextACType = {
    type: 'UPDATE-NEW-POST-TEXT',
    text: string
}
export type profileReducerType = addPostACType | updateNewPostTextACType;
type InitialStateType = {
    posts: Array<ObjPostType>,
    newPostText: string
}

let InitialState = {
    posts: [
        {id: v1(), message: 'Hello, What are you doing?', likeCount: '5'},
        {id: v1(), message: 'Hi, I am learning TypeScript now.', likeCount: '13'},
    ],
    newPostText: ''
}

const profileReducer = (state: InitialStateType = InitialState, action: profileReducerType) => {
    switch (action.type) {
        // добавление нового поста
        case 'ADD-POST' :
            const newPost: ObjPostType = {
                id: v1(),
                message: state.newPostText,
                likeCount: "0"
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        // контролируемое добавление поста
        case 'UPDATE-NEW-POST-TEXT' :
            return {
                ...state,
                newPostText: action.text
            };
        default :
            return state;
    }
}

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    }
}
export const updateNewPostTextAC = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        text: text
    }
}

export default profileReducer;