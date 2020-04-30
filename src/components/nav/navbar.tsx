import React from 'react';
import classes from './navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <a href='#1'>Profile</a>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <a href='#1'>Messages</a>
            </div>
            <div className={classes.item}>
                <a href='#1'>News</a>
            </div>
            <div className={classes.item}>
                <a href='#1'>Music</a>
            </div>
            <div className={classes.item}>
                <a href='#1'>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;