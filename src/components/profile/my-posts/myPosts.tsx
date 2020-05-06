import React from 'react';
import style from './myPosts.module.css';
import Post from "./post/post";

const MyPosts = () => {
    return (
            <div className={style.myPosts}>
                My Posts
                <div>
                    <textarea></textarea>
                    <button type='button'>Send</button>
                </div>
                <div>
                    <Post message={'Hello, What are you doing?'} />
                    <Post message={'Hi, I am learning TypeScript now.'}/>
                </div>
            </div>
    );
}

export default MyPosts;