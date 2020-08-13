import style from "./sidebar.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import Friends, {FriendsType} from "./friends/Friends";
import NavMenu from "./nav-menu/nav-menu";

export const Navbar = () => {

    return (
        <nav className={style.nav}>
            <NavMenu/>
            <Friends />
        </nav>
    )
}