import React from 'react';
import style from './myPosts.module.css';
import Post from "./post/post";

type ObjType = {
    id: string,
    message: string,
    likeCount: string
}
type PropsType = {
    posts: Array<ObjType>
}

const MyPosts = (props: PropsType) => {
    return (
        <div className={style.postsBlock}>
            My Posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button type='button'>Send</button>
                </div>
            </div>
            <div className={style.posts}>
                {
                    props.posts.map(({id, message, likeCount}) => <Post message={message} likeCount={likeCount}
                                                                        key={id}/>)
                }
            </div>
        </div>
    );
}

export default MyPosts;