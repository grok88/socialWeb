import {v1} from "uuid";
import {ACTION_CREATOR, ObjPostType} from "./state";

let InitialState = {
    posts: [
        {id: v1(), message: 'Hello, What are you doing?', likeCount: '5'},
        {id: v1(), message: 'Hi, I am learning TypeScript now.', likeCount: '13'},
    ],
    newPostText: ''
}

const profileReducer = (state: any = InitialState, action: any) => {
    switch (action.type) {
        // добавление нового поста
        case ACTION_CREATOR.ADD_POST :
            const newPost: ObjPostType = {
                id: v1(),
                message: state.newPostText,
                likeCount: "0"
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        // контролируемое добавление поста
        case ACTION_CREATOR.UPDATE_NEW_POST_TEXT :
            return {
                ...state,
                newPostText: action.text
            };
        default :
            return state;
    }
}

// export type ProfileActionsTypes = InferActionsTypes<typeof actions>

// export const actions = {
//    addPostActionCreator:() => ({type: ACTION_CREATOR.ADD_POST} as const),
//    updateNewPostTextActionCreator: (text: string) => ({type: ACTION_CREATOR.UPDATE_NEW_POST_TEXT, text} as const),
// }

export const addPostActionCreator = () => {
    return {
        type: ACTION_CREATOR.ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: ACTION_CREATOR.UPDATE_NEW_POST_TEXT,
        text: text
    }
}

export default profileReducer;