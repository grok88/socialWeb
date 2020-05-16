import style from "../dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

 export type DialogItemType = {
    name: string,
    id: string
    url:string
}

export const DialogItem = (props: DialogItemType) => {
    const {name, id, url} = props;
    return (
        <div className={style.dialog + ' ' + style.active}>
            <img src={url} alt="userAvatar" width={40} height={40}/>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    );
}