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

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <DialogItem name={'Alex'} id={'1'}/>
                <DialogItem name={'Gor'} id={'2'}/>
                <DialogItem name={'Jora'} id={'3'}/>
                <DialogItem name={'Anyfriy'} id={'4'}/>
                <DialogItem name={'Sveta'} id={'5'}/>
                <DialogItem name={'Sergey'} id={'6'}/>
            </div>
            <div className={style.messages}>
                <Message message={'E-ho-ho'}/>
                <Message message={'And the bottle of rum'}/>
                <Message message={'Yes!'}/>
            </div>
        </div>
    );
}

export default Dialogs;