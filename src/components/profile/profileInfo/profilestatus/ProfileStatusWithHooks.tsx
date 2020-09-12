import React, {ChangeEvent, useState} from 'react';
import styles from './ProfileStatus.module.css';

type PropsType = {
    status: string;
    updateUserStatus: (status: string) => void;
}

export const ProfileStatusWithHooks = (props: PropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [status, setStatus] = useState<string>(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={styles.profileStatusBlock}>
            {editMode
                ? <input type={'text'}
                         autoFocus={true}
                         onBlur={deactivateEditMode}
                         onChange={onChangeStatus}
                         value={status}
                />
                : <div>
                    <span onDoubleClick={activateEditMode}>{status || 'No status'}</span>
                </div>
            }
        </div>
    );
}