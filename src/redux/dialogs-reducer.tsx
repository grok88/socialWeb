import {v1} from "uuid";
import {DialogItemType} from "../components/dialogs/dialogItem/dialogItem";
import {MessagesType} from "./redux-store";

const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';

export type addMessACType = ReturnType<typeof addMessAC>;

export type dialogsReducerAC = addMessACType ;

// export type DialogsReducerInitialStateType = {
//     dialogs: Array<DialogItemType>;
//     messages: Array<MessagesType>;
// }


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
    ] as Array<DialogItemType>,
    messages: [
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'I am good!'}
    ] as Array<MessagesType>,
}

export type DialogsReducerInitialStateType = typeof initialState;

const dialogsReducer = (state: DialogsReducerInitialStateType = initialState, action: dialogsReducerAC):DialogsReducerInitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE :
            let newMess = {
                id:v1(),
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

export const addMessAC = (value: string) => {
    return {
        type: ADD_MESSAGE,
        value
    } as const;
}

export default dialogsReducer;