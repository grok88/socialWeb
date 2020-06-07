import React from 'react';
import style from './navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends, { FriendsType } from "./friends/Friends";

type PropsType = {
    state: {
        friends: Array<FriendsType>
    },
    dispatch: (action:any) => void,
    // addFriends:() => void,
    // addNameToNewFriends:(name:string) => void,
    // addUrlToNewFriends:(url:string) => void,
}

const Navbar = (props: PropsType) => {

    const {state: {friends}, dispatch} = props;
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
            <Friends state={friends}
                     dispatch={dispatch}/>
                   {/*  addFriends={addFriends}
                     addNameToNewFriends={addNameToNewFriends}
                     addUrlToNewFriends={addUrlToNewFriends}/>*/}
        </nav>
    );
}

export default Navbar;