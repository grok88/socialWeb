import React, {RefObject, KeyboardEvent} from 'react';
import style from './myPosts.module.css';
import Post from "./post/post";

type ObjType = {
    id: string,
    message: string,
    likeCount: string
}
type PropsType = {
    posts: Array<ObjType>
    addPost: (message: string) => void
}

const MyPosts = (props: PropsType) => {

    const {posts, addPost} = props;

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();

    const addPostHandler = () => {
        let value = newPostElement.current;

        if (value) {
            let text = value.value.trim();
            addPost(text);
            value.value = ''
        }
    }

    const textareaAddPostHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.charCode === 13) {
            addPostHandler();
        }
    }

    return (
        <div className={style.postsBlock}>
            My Posts
            <div>
                <div>
                    <textarea ref={newPostElement} onKeyPress={textareaAddPostHandler}></textarea>
                </div>
                <div>
                    <button type='button' onClick={addPostHandler}>Send</button>
                </div>
            </div>
            <div className={style.posts}>
                {
                    posts.map(({id, message, likeCount}) => <Post message={message} likeCount={likeCount}
                                                                  key={id}/>)
                }
            </div>
        </div>
    );
}

export default MyPosts;