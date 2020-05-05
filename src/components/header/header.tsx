import React from 'react';
import classes from './header.module.css';


const Header = () => {
    return (
        <header className={classes.header}>
            <img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" alt="logo"/>
        </header>
    );
}

export default Header;