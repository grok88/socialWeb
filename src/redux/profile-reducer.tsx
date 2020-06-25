import {v1} from "uuid";
import {ObjPostType} from "./state";


// TS profileReducer
export type addPostACType = {
    type: 'ADD-POST'
}
export type updateNewPostTextACType = {
    type: 'UPDATE-NEW-POST-TEXT',
    text: string
}
export type profileReducerType = addPostACType | updateNewPostTextACType;
 export type ProfileReducerInitialStateType = {
    posts: Array<ObjPostType>,
    newPostText: string
}

let InitialState:ProfileReducerInitialStateType = {
    posts: [
        {id: v1(), message: 'Hello, What are you doing?', likeCount: '5'},
        {id: v1(), message: 'Hi, I am learning TypeScript now.', likeCount: '13'},
    ],
    newPostText: ''
}

const profileReducer = (state: ProfileReducerInitialStateType = InitialState, action: profileReducerType) => {
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
        default :
            return state;
    }
}

export const addPostAC = ():addPostACType => {
    return {
        type: 'ADD-POST'
    }
}
export const updateNewPostTextAC = (text: string):updateNewPostTextACType => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        text: text
    }
}

export default profileReducer;