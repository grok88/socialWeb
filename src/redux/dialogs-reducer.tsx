import {v1} from "uuid";
import {DialogItemType} from "../components/dialogs/dialogItem/dialogItem";
import { MessagesType } from "./redux-store";


// TS dialogsReducer
export type addMessACType = {
    type: 'ADD-MESSAGE'
}
export type changeNewMessageTextACType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    text: string
}
export type dialogsReducerAC = addMessACType | changeNewMessageTextACType;
export type DialogsReducerInitialStateType = {
    dialogs: Array<DialogItemType>,
    messages: Array<MessagesType>,
    newMessageText: string
}

let initialState = {
    dialogs: [
        {
            id: v1(),
            name: "Alex",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvTQmV6oI5wUAiXdI6JjvFjPAUm7iq2AeNR45ffjomO1zLtmik&usqp=CAU"
        },
        {
            id: v1(),
            name: "Gor",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT1zZkQjtBjyYp5uq1qhmdpmoRkTFws1hL54z8U40EQv08o06Q&usqp=CAU"
        },
        {
            id: v1(),
            name: "Jora",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTK9DkWY2BgUcJMNZXyAz6Cpmiq-AhC098wtOnBL-3foioVeyaI&usqp=CAU"
        },
        {
            id: v1(),
            name: "Anyfriy",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqX1EK98tD5uSgn72MKv-2pEhDAPiiiIgXH7LMYAe982_CtbRN&usqp=CAU"
        },
        {
            id: v1(),
            name: "Sveta",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQb0QBmlGsym_SIuH6d-OrApu0iX0j8K4bxOufsI9D9GeKv7h1i&usqp=CAU"
        },
        {
            id: v1(),
            name: "ergey",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_yhvGXHtP8leB8fhWCAOke-8h5gRG1Wxo6fS814OFjX_g1qOl&usqp=CAU"
        }
    ],
    messages: [
        {id: v1(), message: 'E-ho-ho'},
        {id: v1(), message: 'And the bottle of rum'},
        {id: v1(), message: 'Yes!'}
    ],
    newMessageText: ''
}

const dialogsReducer = (state: DialogsReducerInitialStateType = initialState, action: dialogsReducerAC) => {

    switch (action.type) {
        // Добавление сообщения в state
        case 'ADD-MESSAGE' :
            let newMess = {
                id: v1(),
                message: state.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages, newMess],
                newMessageText: ''
            }

        // Контролтруемое добавление сообщения
        case 'UPDATE-NEW-MESSAGE-TEXT' :
            return {
                ...state,
                newMessageText: action.text
            }
        default :
            return state;
    }
}

export const addMessAC = (): addMessACType => {
    return {
        type: 'ADD-MESSAGE'
    }
}
export const changeNewMessageTextAC = (text: string): changeNewMessageTextACType => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        text: text
    }
}

export default dialogsReducer;