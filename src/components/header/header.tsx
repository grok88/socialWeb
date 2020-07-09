import React from 'react';
import style from './header.module.css';
import { NavLink } from 'react-router-dom';

type PropsType = {
    isAuth: boolean,
    login:string | null
}
const Header = (props:PropsType) => {
    return (
        <header className={style.header}>
            <img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" alt="logo"/>
            <div className={style.loginBlock}>
                {
                    props.isAuth ? props.login : <NavLink to={'/login'}>
                        login
                    </NavLink>
                }
            </div>
        </header>
    );
}

export default Header;