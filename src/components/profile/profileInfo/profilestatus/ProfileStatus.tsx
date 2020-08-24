import React from 'react';
import styles from './ProfileStatus.module.css';

type PropsType = {
    status: string;
}

export class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div className={styles.profileStatusBlock}>
                {this.state.editMode
                    ? <input type={'text'} value={this.props.status} autoFocus={true} onBlur={this.deactivateEditMode}/>
                    : <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
            </div>
        );
    }
}