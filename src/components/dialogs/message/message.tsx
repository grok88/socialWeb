import style from "../dialogs.module.css";
import React from "react";

type MessageType = {
    message: string
}

export const Message = (props: MessageType) => {
    return (
        <div className={style.message}>{props.message}</div>
    );
}