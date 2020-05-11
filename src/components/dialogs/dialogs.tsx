import React from 'react';
import style from './dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItem = {
    name: string,
    id: string

}

const DialogItem = (props: DialogItem) => {
    const {name, id} = props;
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    );
}

type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
    return (
        <div className={style.message}>{props.message}</div>
    );
}

// type dialogsDateType = {
//
// }

const dialogs: Array<DialogItem> = [
    {id: '1', name: "Alex"},
    {id: '1', name: "Gor"},
    {id: '1', name: "Jora"},
    {id: '1', name: "Anyfriy"},
    {id: '1', name: "Sveta"},
    {id: '1', name: "ergey"}
];

const messages = [
    {id: '1', message: 'E-ho-ho'},
    {id: '2', message: 'And the bottle of rum'},
    {id: '3', message: 'Yes!'}
];

let dialogsElements = dialogs.map(({name, id}) => <DialogItem name={name} id={id} key={id}/>);
let messagesElements = messages.map(({id, message}) =>  <Message message={message} key={id}/>);

const Dialogs = () => {
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