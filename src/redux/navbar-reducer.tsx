import {v1} from "uuid";
import {ACTION_CREATOR, ObjPostType} from "./state";


const navbarReducer = (state: any, action: any) => {
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
        type: ACTION_CREATOR.UPDATE_NEW_POST_TEXT,
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