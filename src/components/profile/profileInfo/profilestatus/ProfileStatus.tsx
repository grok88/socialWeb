import React, {ChangeEvent} from 'react';
import styles from './ProfileStatus.module.css';

type PropsType = {
    status: string;
    updateUserStatus: (status: string) => void;
}

export class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status);
    }

    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.state.status) {
            this.setState({
                status: this.props.status
            });
        }
        console.log('componentDidUpdate');
    }

    render() {
        console.log('render');
        return (
            <div className={styles.profileStatusBlock}>
                {this.state.editMode
                    ? <input type={'text'}
                             value={this.state.status}
                             autoFocus={true}
                             onBlur={this.deactivateEditMode}
                             onChange={this.onChangeStatus}
                    />
                    : <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || 'No status'}</span>
                    </div>
                }
            </div>
        );
    }
}