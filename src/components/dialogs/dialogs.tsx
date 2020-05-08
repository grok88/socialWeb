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

const dialogsDate = [
    {id: '1', name: "Alex"},
    {id: '1', name: "Gor"},
    {id: '1', name: "Jora"},
    {id: '1', name: "Anyfriy"},
    {id: '1', name: "Sveta"},
    {id: '1', name: "ergey"}
];

const messages = [
    {id: '1',  message: 'E-ho-ho'},
    {id: '2',  message: 'And the bottle of rum'},
    {id: '3',  message: 'Yes!'}
];
const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <DialogItem name={dialogsDate[0].name} id={dialogsDate[0].id}/>
                <DialogItem name={dialogsDate[1].name} id={dialogsDate[1].id}/>
                <DialogItem name={dialogsDate[2].name} id={dialogsDate[2].id}/>
                <DialogItem name={dialogsDate[3].name} id={dialogsDate[3].id}/>
                <DialogItem name={dialogsDate[4].name} id={dialogsDate[4].id}/>
                <DialogItem name={dialogsDate[5].name} id={dialogsDate[5].id}/>
            </div>
            <div className={style.messages}>
                <Message message={messages[0].message}/>
                <Message message={messages[1].message}/>
                <Message message={messages[2].message}/>
            </div>
        </div>
    );
}

export default Dialogs;