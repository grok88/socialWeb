// import preloader from '../preloader/svg-loaders/oval.svg';
import React from 'react';
import styles from './Preloader.module.css'

const Preloader = () => {
    return (
        // <img src={preloader} alt="preloader" style={ {} }/>
        <div>
            <div className={styles.container}>
                <div className={styles.yellow}></div>
                <div className={styles.red}></div>
                <div className={styles.blue}></div>
                <div className={styles.violet}></div>
            </div>
        </div>

    );
}

export default Preloader;