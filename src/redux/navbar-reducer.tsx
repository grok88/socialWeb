import {v1} from "uuid";
import {FriendsType} from "../components/nav/friends/Friends";

// TS navbarReducer
export type addFriendsACType = {
    type: 'ADD-FRIENDS'
}
export type addNameToNewFriendsACType = {
    type: 'ADD-NEW-FRIENDS-NAME',
    name: string
}
export type addUrlToNewFriendsACType = {
    type: 'ADD-NEW-FRIENDS-URL',
    url: string
}
export type navbarReducerAC = addFriendsACType | addNameToNewFriendsACType | addUrlToNewFriendsACType;
export type navbarReducerInitialStateType = {
    friends: Array<FriendsType>
    addFriends: FriendsType
}
let initialState: navbarReducerInitialStateType = {
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


const navbarReducer = (state: navbarReducerInitialStateType = initialState, action: navbarReducerAC) => {
    switch (action.type) {
        // Контролируемое добавление имени друга
        case 'ADD-NEW-FRIENDS-NAME':
            return {
                ...state,
                addFriends: {
                    ...state.addFriends,
                    name: action.name
                }
            }
        // Контролируемое добавление URL друга
        case 'ADD-NEW-FRIENDS-URL' :
            if (action.url.trim().length !== 0) {
                return {
                    ...state,
                    addFriends: {
                        ...state.addFriends,
                        url: action.url
                    }
                }
            }
            break;
        // Добавление друзей блок
        case 'ADD-FRIENDS':
            return {
                ...state,
                friends: [...state.friends, state.addFriends],
                addFriends: {
                    ...state.addFriends,
                    id: v1()
                }
            }
        default :
            return state;
    }
}

export const addFriendsAC = (): addFriendsACType => {
    return {
        type: 'ADD-FRIENDS'
    }
}
export const addNameToNewFriendsAC = (name: string): addNameToNewFriendsACType => {
    return {
        type: 'ADD-NEW-FRIENDS-NAME',
        name
    }
}
export const addUrlToNewFriendsAC = (url: string): addUrlToNewFriendsACType => {
    return {
        type: 'ADD-NEW-FRIENDS-URL',
        url
    }
}
export default navbarReducer;