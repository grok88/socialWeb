import React from 'react';
import style from './dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <div className={style.dialog + ' ' + style.active}>
                    <NavLink to={'/dialogs/1'}>Alex</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to={'/dialogs/2'}>Gor</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to={'/dialogs/3'}>Jora</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to={'/dialogs/4'}> Anyfriy</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to={'/dialogs/5'}> Sveta</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to={'/dialogs/6'}> Sergey</NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>E-ho-ho</div>
                <div className={style.message}>And the bottle of rum</div>
                <div className={style.message}>Yes!</div>
            </div>
        </div>
    );
}

export default Dialogs;