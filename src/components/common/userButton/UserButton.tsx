import React from 'react';
import   styles from './UserButton.module.css';

type UserButtonPropsType = {
    label:string
}

export const UserButton:React.FC<UserButtonPropsType> = ({label}) => {
    return <div className={styles.userButtonBlock}>
        <button type={'submit'} className={styles.btn}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {label}
        </button>
    </div>

}