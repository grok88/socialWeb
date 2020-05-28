import React, {RefObject, KeyboardEvent, ChangeEvent} from 'react';
import style from './myPosts.module.css';
import Post from "./post/post";

type ObjType = {
    id: string,
    message: string,
    likeCount: string
}
type PropsType = {
    posts: {
        posts: Array<ObjType>,
        newPostText: string,
    },
    addPost: () => void,
    changeNewPostText: (text: string) => void
}

const MyPosts = (props: PropsType) => {

    const {posts, addPost, changeNewPostText} = props;

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();

    const addPostHandler = () => {
        let value = newPostElement.current;

        if ( value && value.value.trim()) {
            // let text = value.value.trim();
            addPost();
            // changeNewPostText('');
        }
    }

    const textareaAddPostHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.charCode === 13) {
            addPostHandler();
        }
    }
    const newPostChange = () => {
        let value = newPostElement.current;
        if (value) {
            changeNewPostText(value.value);
        }
    }

    return (
        <div className={style.postsBlock}>
            My Posts
            <div>
                <div>
                    <textarea ref={newPostElement}
                              onKeyPress={textareaAddPostHandler}
                              value={posts.newPostText}
                              onChange={newPostChange}/>
                </div>
                <div>
                    <button type='button' onClick={addPostHandler}>Send</button>
                </div>
            </div>
            <div className={style.posts}>
                {
                    posts.posts.map(({id, message, likeCount}) => <Post message={message} likeCount={likeCount}
                                                                        key={id}/>)
                }
            </div>
        </div>
    );
}

export default MyPosts;