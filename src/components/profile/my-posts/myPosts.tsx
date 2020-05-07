import React from 'react';
import style from './myPosts.module.css';
import Post from "./post/post";

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
                <Post message={'Hello, What are you doing?'} count={'3'}/>
                <Post message={'Hi, I am learning TypeScript now.'} count={'7'}/>
            </div>
        </div>
    );
}

export default MyPosts;