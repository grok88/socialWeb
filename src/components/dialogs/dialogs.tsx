import React from 'react';
import style from './dialogs.module.css';
import {DialogItem, DialogItemType} from "./dialogItem/dialogItem";
import {Message} from "./message/message";
import {v1} from 'uuid';


const dialogs: Array<DialogItemType> = [
    {id: v1(), name: "Alex"},
    {id: v1(), name: "Gor"},
    {id: v1(), name: "Jora"},
    {id: v1(), name: "Anyfriy"},
    {id: v1(), name: "Sveta"},
    {id: v1(), name: "ergey"}
];

const messages = [
    {id: v1(), message: 'E-ho-ho'},
    {id: v1(), message: 'And the bottle of rum'},
    {id: v1(), message: 'Yes!'}
];

let dialogsElements = dialogs.map(({name, id}) => <DialogItem name={name} id={id} key={id}/>);
let messagesElements = messages.map(({id, message}) => <Message message={message} key={id}/>);

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