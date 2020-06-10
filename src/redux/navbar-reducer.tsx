import {v1} from "uuid";
import {ACTION_CREATOR, ObjPostType} from "./state";

let initialState = {
    friends: [
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSU8ZWLKMXxuUe7g8j7zCfYZ3BcxuXlxPwBmSV_Mv_Bf9kvMg6F&usqp=CAU',
            name: 'Jora',
            id: v1()
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9uTTJjpx3SiyINwLxuAGskswRNgZXcu8q0PmAHsodRgEtPja3&usqp=CAU',
            name: 'Edyardo',
            id: v1()
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6yM6JujrHFOvFH9NvuV2lWnyXECBr1SWeF-I0tMdYmK942MXr&usqp=CAU',
            name: 'Valentinka',
            id: v1()
        }
    ],
    addFriends: {
        id: '',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSU8ZWLKMXxuUe7g8j7zCfYZ3BcxuXlxPwBmSV_Mv_Bf9kvMg6F&usqp=CAU',
        name: 'Grok'
    }
}

const navbarReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        // Контролируемое добавление имени друга
        case ACTION_CREATOR.ADD_NEW_FRIENDS_NAME :
            state.addFriends.name = action.name;
            return state;
        // Контролируемое добавление URL друга
        case ACTION_CREATOR.ADD_NEW_FRIENDS_URL :
            if (action.url.trim().length !== 0) {
                state.addFriends.url = action.url;
            }
            return state;
        // Добавление друзей блок
        case ACTION_CREATOR.ADD_FRIENDS :
            state.addFriends.id = v1();
            state.friends.push({...state.addFriends});
        default :
            return state;
    }
}

export const addFriendsActionCreator = () => {
    return {
        type: ACTION_CREATOR.ADD_FRIENDS
    }
}

export const addNameToNewFriendsActionCreator = (name: string) => {
    return {
        type: ACTION_CREATOR.ADD_NEW_FRIENDS_NAME,
        name
    }
}

export const addUrlToNewFriendsActionCreator = (url: string) => {
    return {
        type: ACTION_CREATOR.ADD_NEW_FRIENDS_URL,
        url
    }
}


export default navbarReducer;