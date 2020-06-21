import style from "./sidebar.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import Friends, {FriendsType} from "./friends/Friends";

type PropsType = {
    sidebar: {
        friends: Array<FriendsType>
        addFriends: FriendsType
    },
    addFriends: () => void,
    addNameToNewFriends: (value: string) => void,
    addUrlToNewFriends: (value: string) => void
}

export const Navbar = (props: PropsType) => {
    const {sidebar, addFriends, addNameToNewFriends, addUrlToNewFriends} = props;
    return (
        <nav className={style.nav}>
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
                <NavLink to='music' activeClassName={style.active}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='settings' activeClassName={style.active}>Settings</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='users' activeClassName={style.active}>Users</NavLink>
            </div>
            <Friends sidebar={sidebar} addFriends={addFriends} addNameToNewFriends={addNameToNewFriends}
                     addUrlToNewFriends={addUrlToNewFriends}/>
        </nav>
    )
}