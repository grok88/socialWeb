import React from 'react';
import style from './myPosts.module.css';
import Post from './post/post';
import {ProfileType} from '../profileInfo/profileInfo';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea} from '../../common/formsControls/FormsControls';
import {ObjPostType} from '../../../types/types';
import {Col} from 'antd';

type PropsType = {
    profilePage: {
        posts: Array<ObjPostType>;
        profile: ProfileType | null;
    };
    addPost: (value: string) => void;
}

const maxLength30 = maxLengthCreator(30);

const MyPosts = React.memo((props: PropsType) => {
    const {profilePage, addPost} = props;

    const onSubmit = (formData: FormDataType) => {
        addPost(formData.newMessageBody)
    }

    return (
        <Col span={24} className={style.postsBlock}>
            <div className={style.postsFormBlock}>
                <h2>Написать пост</h2>
                <AddPostMessageFormRedux onSubmit={onSubmit}/>
            </div>
            <div className={style.posts}>
                {
                    profilePage.posts.map(({id, message, likeCount}) => <Post message={message}
                                                                              likeCount={likeCount}
                                                                              key={id}/>)
                }
            </div>
        </Col>
    );
});

type FormDataType = {
    newMessageBody: string
}

export const AddPostMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={style.postsForm}>
            <p className={style.note}><span className={style.req}>*</span> Поля со звездочкой обязательны для заполнения
            </p>
            <div className={style.row}>
                <label htmlFor="message">Сообщение <span className={style.req}>*</span></label>
                <Field name='newMessageBody' placeholder='Enter you Post message' component={Textarea}
                       id={'message'}
                       validate={[required, maxLength30]}/>
            </div>
            <div className={style.postsBtn}>
                <button><span>Send</span></button>
            </div>
        </form>
    );
}

const AddPostMessageFormRedux = reduxForm<FormDataType>({form: 'addPostMessageForm'})(AddPostMessageForm);

export default MyPosts;