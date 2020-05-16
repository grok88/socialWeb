import React from 'react';
import style from './dialogs.module.css';
import {DialogItem, DialogItemType} from "./dialogItem/dialogItem";
import {Message} from "./message/message";
import {messagesType} from "../../redux/state";

type propsType = {
    data: {
        dialogs: Array<DialogItemType>,
        messages: Array<messagesType>
    }
}

const Dialogs = (props: propsType) => {
    const {dialogs, messages} = props.data;

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
            </div>
        </div>
    );
}

export default Dialogs;