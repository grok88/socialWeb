import React, {RefObject, ChangeEvent, KeyboardEvent} from 'react';
import style from './dialogs.module.css';
import {DialogItem, DialogItemType} from "./dialogItem/dialogItem";
import {Message} from "./message/message";
import {MessagesType, addMessActionCreator, changeNewMessageTextActionCreator} from "../../redux/state";

type propsType = {
    data: {
        dialogs: Array<DialogItemType>,
        messages: Array<MessagesType>,
        newMessageText: string
    },
    dispatch: (action: any) => void
}


const Dialogs = (props: propsType) => {
    const {dialogs, messages} = props.data;

   // let newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef();

    // Добавление сообщения в state
    const addMess = () => {
        props.dispatch(addMessActionCreator());
    }
    // Добавление сообщения ерез пробел
    // const textareaAddMessHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    //     if (e.charCode === 13) {
    //         props.addMessage();
    //     }
    // }

    // Контролируемй текстареа
    const onChangeNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewMessageTextActionCreator(e.currentTarget.value));
        // props.changeNewMessageText(e.currentTarget.value);
    }


    let dialogsElements = dialogs.map(({name, id, url}) => <DialogItem name={name} id={id} key={id} url={url}/>);
    let messagesElements = messages.map(({id, message}) => <Message message={message} key={id}/>);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {
                    dialogsElements
                }
            </div>
            <div className={style.messages}>
                {
                    messagesElements
                }
                <div>
                    <textarea
                              onChange={onChangeNewMessageText}
                              value={props.data.newMessageText}></textarea>
                    <button onClick={addMess}>Add message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;