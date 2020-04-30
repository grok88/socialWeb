import React from 'react';
import classes from './myPosts.module.css';
import Post from "./post/post";

const MyPosts = () => {
    return (
            <div >
                My Posts
                <div>
                    <textarea></textarea>
                    <button type='button'>Send</button>
                </div>
                <div>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
    );
}

export default MyPosts;