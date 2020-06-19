import React, {RefObject, KeyboardEvent, ChangeEvent} from 'react';
import style from './myPosts.module.css';
import Post from "./post/post";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";

type ObjType = {
    id: string,
    message: string,
    likeCount: string
}
type PropsType = {
    profilePage: {
        posts: Array<ObjType>,
        newPostText: string,
    },
    // dispatch: (action: any) => void,
    addPost: () => void,
    changeNewPostText: (text: string) => void
}


const MyPosts = (props: PropsType) => {
    const {profilePage, changeNewPostText, addPost} = props;

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();

    const addPostHandler = () => {
        let value = newPostElement.current;

        if (value && value.value.trim()) {
            // let text = value.value.trim();
            addPost();
            // dispatch(addPostActionCreator());
            // changeNewPostText('');
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
        //dispatch(updateNewPostTextActionCreator(value));
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
                    props.profilePage.posts.map(({id, message, likeCount}) => <Post message={message} likeCount={likeCount}
                                                                              key={id}/>)
                }
            </div>
        </div>
    );
}

export default MyPosts;