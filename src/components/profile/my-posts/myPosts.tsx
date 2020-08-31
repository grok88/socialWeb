import React from 'react';
import style from './myPosts.module.css';
import Post from "./post/post";
import {ProfileInfoType} from "../profileInfo/profileInfo";
import {ObjPostType} from "../../../redux/redux-store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type ObjType = {
    id: string,
    message: string,
    likeCount: string
}
type PropsType = {
    profilePage: {
        posts: Array<ObjPostType>;
        profile: ProfileInfoType | null;
    };
    addPost: (value:string) => void;
}


const MyPosts = (props: PropsType) => {
    const {profilePage, addPost} = props;

    // let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();

    // const addPostHandler = () => {
    //     let value = newPostElement.current;
    //
    //     if (value && value.value.trim()) {
    //         addPost();
    //     }
    // }
    // Добавление сообщения через пробел
    // const textareaAddPostHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    //     if (e.charCode === 13) {
    //         addPostHandler();
    //     }
    // }
    // const newPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let value = e.currentTarget && e.currentTarget.value;
    //     changeNewPostText(value);
    // }

    const onSubmit = (formData: FormDataType) =>{
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
}

type FormDataType = {
    newMessageBody: string
}


export const AddPostMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newMessageBody' placeholder='Enter you message' type='textarea' component={'input'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
}

const AddPostMessageFormRedux = reduxForm<FormDataType>({form: 'addPostMessageForm'})(AddPostMessageForm);

export default MyPosts;