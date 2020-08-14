import React, {ChangeEvent, KeyboardEvent, RefObject} from 'react';
import style from './myPosts.module.css';
import Post from "./post/post";
import {ProfileInfoType} from "../profileInfo/profileInfo";
import {ObjPostType} from "../../../redux/redux-store";

type ObjType = {
    id: string,
    message: string,
    likeCount: string
}
type PropsType = {
    profilePage: {
        posts: Array<ObjPostType>,
        newPostText: string,
        profile: ProfileInfoType | null
    },
    addPost: () => void,
    changeNewPostText: (text: string) => void
}


const MyPosts = (props: PropsType) => {
    const {profilePage, changeNewPostText, addPost} = props;

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();

    const addPostHandler = () => {
        let value = newPostElement.current;

        if (value && value.value.trim()) {
            addPost();
        }
    }
    // Добавление сообщения через пробел
    const textareaAddPostHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.charCode === 13) {
            addPostHandler();
        }
    }
    const newPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let value = e.currentTarget && e.currentTarget.value;
        changeNewPostText(value);
    }

    return (
        <div className={style.postsBlock}>
            My Posts
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        onKeyPress={textareaAddPostHandler}
                        value={profilePage.newPostText}
                        onChange={newPostChange}/>
                </div>
                <div>
                    <button type='button' onClick={addPostHandler}>Send</button>
                </div>
            </div>
            <div className={style.posts}>
                {
                    props.profilePage.posts.map(({id, message, likeCount}) => <Post message={message}
                                                                                    likeCount={likeCount}
                                                                                    key={id}/>)
                }
            </div>
        </div>
    );
}

export default MyPosts;