import style from "./sidebar.module.css";
import React from "react";
import NavMenu from "./nav-menu/nav-menu";
import FriendsContainer from "./friends/FriendsContainer";

export const Navbar = () => {

    return (
        <nav className={style.nav}>
            <NavMenu/>
            <FriendsContainer />
        </nav>
    )
}