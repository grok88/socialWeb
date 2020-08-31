import React from 'react';
import styles from './header.module.css';
import {NavLink} from 'react-router-dom';
import {AuthUserType} from "../../redux/auth-reducer";

type PropsType = {
    isAuth: boolean;
    login: string | null;
    authUser: AuthUserType | null;
    logout: () => void;
}
const Header = (props: PropsType) => {

    return (
        <header className={styles.header}>
            <img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" alt="logo"/>
            <div className={styles.loginBlock}>
                {

                    props.isAuth ? <div className={styles.imgBlock}>
                            <img
                                src={props.authUser ? 'https://i03.fotocdn.net/s121/f5452ede0f497c83/user_l/2769409821.jpg' : ""}
                                alt={'logo'}/>
                            <button onClick={props.logout} className={styles.logout}>logOut</button>
                        </div>
                        : <NavLink to={'/login'}>
                            login
                        </NavLink>
                }
            </div>
        </header>
    );
}

export default Header;