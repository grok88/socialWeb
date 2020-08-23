import React, {ChangeEvent} from 'react';
import {DialogItem, DialogItemType} from "./dialogItem/dialogItem";
import {Message} from "./message/message";
import style from "./dialogs.module.css";

export type MessagesType = {
    id: string,
    message: string
}

type propsType = {
    dialogsPage: {
        dialogs: Array<DialogItemType>,
        messages: Array<MessagesType>,
        newMessageText: string
    };
    addMess: () => void;
    changeNewMessage: (text: string) => void;
    isAuth: boolean;
}

const Dialogs = (props: propsType) => {
    const {addMess, changeNewMessage, dialogsPage} = props;
    //
    // if(!props.isAuth){
    //     return <Redirect to={'/login'}/>
    // }
    // Добавление сообщения в state
    const addMessText = () => {
        addMess();
    }

    // Контролируемй текстареа
    const onChangeNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        changeNewMessage(text);
    }

    let dialogsElements = dialogsPage.dialogs.map(({name, id, url}) => <DialogItem name={name} id={id} key={id}
                                                                                   url={url}/>);
    let messagesElements = dialogsPage.messages.map(({id, message}) => <Message message={message} key={id}/>);

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
                        value={props.dialogsPage.newMessageText}></textarea>
                    <button onClick={addMessText}>Add message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;