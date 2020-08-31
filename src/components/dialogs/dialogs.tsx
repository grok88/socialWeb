import React from 'react';
import {DialogItem, DialogItemType} from "./dialogItem/dialogItem";
import {Message} from "./message/message";
import style from "./dialogs.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

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

const Dialogs = (props: propsType) => {
    const {addMess, dialogsPage} = props;

    let dialogsElements = dialogsPage.dialogs.map(({name, id, url}) => <DialogItem name={name} id={id} key={id}
                                                                                   url={url}/>);
    let messagesElements = dialogsPage.messages.map(({id, message}) => <Message message={message} key={id}/>);

    const onSubmit = (formData: FormDataType) => {
        addMess(formData.newMessageBody);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {
                    dialogsElements
                }
            </div>
            <div className={style.messages}>
                {
                    messagesElements
                }
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
        <form onSubmit={props.handleSubmit}>
            <Field name={'newMessageBody'} placeholder={'enter you message'} type={'textarea'} component={'input'}/>
            <button>Add message</button>
        </form>
    );
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;