import React from 'react';
import style from './myPosts.module.css';
import Post from "./post/post";

const posts = [
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
                {
                    posts.map(({id,message,likeCount}) =>  <Post message={message} likeCount={likeCount} key={id}/>)
                }
            </div>
        </div>
    );
}

export default MyPosts;