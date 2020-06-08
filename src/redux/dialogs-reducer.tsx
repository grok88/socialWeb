import {v1} from "uuid";
import {ACTION_CREATOR, ObjPostType} from "./state";

const dialogsReducer = (state: any, action: any) => {
    switch (action.type) {
        // Добавление сообщения в state
        case ACTION_CREATOR.ADD_MESSAGE :
            let newMess = {
                id: v1(),
                message: state.newMessageText
            }
            state.messages.push(newMess);
            state.newMessageText = '';
            return state;
        // Контролтруемое добавление сообщения
        case ACTION_CREATOR.UPDATE_NEW_MESSAGE_TEXT :
            state.newMessageText = action.text as string;
            return state;
        default :
            return state;
    }
}

export const addMessActionCreator = () => {
    return {
        type: ACTION_CREATOR.ADD_MESSAGE
    }
}
export const changeNewMessageTextActionCreator = (text: string) => {
    return {
        type: ACTION_CREATOR.UPDATE_NEW_MESSAGE_TEXT,
        text: text
    }
}

export default dialogsReducer;