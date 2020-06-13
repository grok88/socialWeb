import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./myPosts";

type ObjType = {
    id: string,
    message: string,
    likeCount: string
}
type PropsType = {
    // posts: {
    //     posts: Array<ObjType>,
    //     newPostText: string,
    // },
    // dispatch: (action: any) => void,
    // addPost: () => void,
    // changeNewPostText: (text: string) => void
    store: any
}


const MyPostsContainer = (props: PropsType) => {
    const {store} = props;

    let state = store.getState();


    const addPostHandler = () => {
        store.dispatch(addPostActionCreator());
    }

    const newPostChange = (value: string) => {
        store.dispatch(updateNewPostTextActionCreator(value));
    }

    return (
        <MyPosts posts={state.profilePage} changeNewPostText={newPostChange} addPost={addPostHandler}/>
    );
}

export default MyPostsContainer;