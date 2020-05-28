import React, {RefObject} from 'react';
import style from './dialogs.module.css';
import {DialogItem, DialogItemType} from "./dialogItem/dialogItem";
import {Message} from "./message/message";
import {MessagesType} from "../../redux/state";

type propsType = {
    data: {
        dialogs: Array<DialogItemType>,
        messages: Array<MessagesType>
    },
    addMessage: (message: string) => void
}

const Dialogs = (props: propsType) => {
    const {dialogs, messages} = props.data;

    let newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef();

    const addMess = () => {
        let text = newMessageElement.current;
        if(text){
            props.addMessage(text.value);
            text.value='';
        }
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
                    <textarea ref={newMessageElement}></textarea>
                    <button onClick={addMess}>Add message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;