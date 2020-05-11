import style from "../dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

 export type DialogItemType = {
    name: string,
    id: string

}

export const DialogItem = (props: DialogItemType) => {
    const {name, id} = props;
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    );
}