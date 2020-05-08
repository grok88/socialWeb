import React from 'react';
import style from './myPosts.module.css';
import Post from "./post/post";

const postData = [
    {id:1, message :'Hello, What are you doing?', likeCount:'5' },
    {id:1, message :'Hi, I am learning TypeScript now.', likeCount:'13' },
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
                <Post message={postData[0].message} likeCount={postData[0].likeCount}/>
                <Post message={postData[1].message} likeCount={postData[1].likeCount}/>
            </div>
        </div>
    );
}

export default MyPosts;