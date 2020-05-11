import React from 'react';
import style from './myPosts.module.css';
import Post from "./post/post";
import {v1} from "uuid";

const posts = [
    {id: v1(), message: 'Hello, What are you doing?', likeCount: '5'},
    {id: v1(), message: 'Hi, I am learning TypeScript now.', likeCount: '13'},
];

const MyPosts = () => {
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
                    posts.map(({id, message, likeCount}) => <Post message={message} likeCount={likeCount} key={id}/>)
                }
            </div>
        </div>
    );
}

export default MyPosts;