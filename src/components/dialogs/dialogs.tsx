import React from 'react';
import {DialogItem, DialogItemType} from './dialogItem/dialogItem';
import {Message} from './message/message';
import style from './dialogs.module.css';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Textarea} from '../common/formsControls/FormsControls';
import {maxLengthCreator, required} from '../../utils/validators/validators';
import {Col, Form, Row} from 'antd';
import {UserButton} from '../common/userButton/UserButton';


export type MessagesType = {
    id: string,
    message: string
}

type propsType = {
    dialogsPage: {
        dialogs: Array<DialogItemType>,
        messages: Array<MessagesType>,
        newMessageText: string
    };
    addMess: (value: string) => void;
    isAuth: boolean;
}
const maxLength30 = maxLengthCreator(30);

const Dialogs = (props: propsType) => {
    const {addMess, dialogsPage} = props;

    let dialogsElements = dialogsPage.dialogs.map(({name, id, url}) => <Col span={24} key={id}>
        <DialogItem name={name} id={id}  url={url}/>
    </Col>)
    let messagesElements = dialogsPage.messages.map(({id, message}) => <Message message={message} key={id}/>);

    const onSubmit = (formData: FormDataType) => {
        addMess(formData.newMessageBody);
    }

    return (
        <div className={style.dialogs}>
            <Row className={style.dialogItems} gutter={[16, 16]}>
                {
                    dialogsElements
                }
            </Row>
            <div className={style.messages}>
                <div>
                    {
                        messagesElements
                    }
                </div>
                <AddMessageFormRedux onSubmit={onSubmit}/>
            </div>
        </div>
    );
}

type FormDataType = {
    newMessageBody: string
}

export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.AddMessageForm}>
            <div className={style.areaBox}>
                <Form.Item>
                    <Field name={'newMessageBody'} placeholder={'enter you message'} component={Textarea}
                           validate={[required, maxLength30]}
                    />
                </Form.Item>
            </div>
            <UserButton label={'Add message'}/>
            {/*<button className={style.btn}>Add message</button>*/}
        </form>
    );
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;