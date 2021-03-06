import {v1} from "uuid";
import {DialogItemType} from "../components/dialogs/dialogItem/dialogItem";
import {InferActionsType, MessagesType} from "./redux-store";

export type dialogsReducerAC = InferActionsType<typeof actions>;

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
    ] as Array<DialogItemType>,
    messages: [
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'I am good!'}
    ] as Array<MessagesType>,
}

export type DialogsReducerInitialStateType = typeof initialState;

export const dialogsReducer = (state: DialogsReducerInitialStateType = initialState, action: dialogsReducerAC): DialogsReducerInitialStateType => {
    switch (action.type) {
        case "dialogs/ADD-MESSAGE" :
            let newMess = {
                id: v1(),
                message: action.value
            }
            return {
                ...state,
                messages: [...state.messages, newMess]
            }
        default :
            return state;
    }
}

export const actions = {
    addMessAC: (value: string) => {
        return {
            type: 'dialogs/ADD-MESSAGE',
            value
        } as const;
    }
}


export default dialogsReducer;