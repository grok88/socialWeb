import React from 'react';
import style from './header.module.css';
import { NavLink } from 'react-router-dom';
import {AuthUserType} from "../../redux/auth-reducer";

type PropsType = {
    isAuth: boolean,
    login:string | null,
    authUser:AuthUserType | null
}
const Header = (props:PropsType) => {

    return (
        <header className={style.header}>
            <img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" alt="logo"/>
            <div className={style.loginBlock}>
                {

                    props.isAuth ? <img src={props.authUser ? 'https://i03.fotocdn.net/s121/f5452ede0f497c83/user_l/2769409821.jpg' : ""} alt={'logo'} /> : <NavLink to={'/login'}>
                        login
                    </NavLink>
                }
            </div>
        </header>
    );
}

export default Header;