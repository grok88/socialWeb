import React from "react";
import style from "./nav-menu.module.css";
import {NavLink} from "react-router-dom";

const NavMenu = () => {
    return (
        <>
            <div className={`${style.item} ${style.active}`}>
                <NavLink to='/profile' activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs' activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/news' activeClassName={style.active}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/music' activeClassName={style.active}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/settings' activeClassName={style.active}>Settings</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/users' activeClassName={style.active}>Users</NavLink>
            </div>
        </>
    );
}

export default NavMenu;
