import React from 'react';
import style from './myPosts.module.css';
import Post from "./post/post";
import {ProfileType} from "../profileInfo/profileInfo";
import {ObjPostType} from "../../../redux/redux-store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../../utils/validators/validators";
import {Textarea} from '../../common/formsControls/FormsControls';

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
        <div className={style.postsBlock}>
            My Posts
            <div>
                <AddPostMessageFormRedux onSubmit={onSubmit}/>
            </div>
            <div className={style.posts}>
                {
                    profilePage.posts.map(({id, message, likeCount}) => <Post message={message}
                                                                              likeCount={likeCount}
                                                                              key={id}/>)
                }
            </div>
        </div>
    );
});

type FormDataType = {
    newMessageBody: string
}

export const AddPostMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newMessageBody' placeholder='Enter you Post message' component={Textarea}
                       validate={[required, maxLength30]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
}

const AddPostMessageFormRedux = reduxForm<FormDataType>({form: 'addPostMessageForm'})(AddPostMessageForm);

export default MyPosts;