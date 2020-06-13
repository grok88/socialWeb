import {addMessActionCreator, changeNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import React from "react";
import Dialogs from "./dialogs";

export type DialogsContainerPropsType = {
    store: any
}

const DialogsContainer = (props: DialogsContainerPropsType) => {
    let {store} = props;
    let data = store.getState().dialogsPage;
    // Добавление сообщения в state
    const addMess = () => {
        store.dispatch(addMessActionCreator());
    }

    // Контролируемй текстареа
    const onChangeNewMessageText = (text: string) => {
        store.dispatch(changeNewMessageTextActionCreator(text));
    }

    return (
        <Dialogs data={data} addMess={addMess} changeNewMessage={onChangeNewMessageText}/>
    );
}
export default DialogsContainer;