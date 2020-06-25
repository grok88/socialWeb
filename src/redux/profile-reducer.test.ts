import {v1} from "uuid";
import profileReducer, {ProfileReducerInitialStateType, addPostAC, updateNewPostTextAC} from "./profile-reducer";

test('correct post should be added to correct posts', () => {
    const startState: ProfileReducerInitialStateType = {
        posts: [
            {id: v1(), message: 'Hello, What are you doing?', likeCount: '5'},
            {id: v1(), message: 'Hi, I am learning TypeScript now.', likeCount: '13'},
        ],
        newPostText: ''
    }
    startState.newPostText = 'Post added from test';
    const endStart = profileReducer(startState, addPostAC());

    expect(endStart.posts.length).toBe(3);
    expect(endStart.posts[2].message).toBe('Post added from test');
    expect(endStart.posts[2]).toBeDefined();
    expect(endStart.newPostText).toBe('');

});

test('profileReducer should change only post newPostText in startState', () => {
    const startState: ProfileReducerInitialStateType = {
        posts: [
            {id: v1(), message: 'Hello, What are you doing?', likeCount: '5'},
            {id: v1(), message: 'Hi, I am learning TypeScript now.', likeCount: '13'},
        ],
        newPostText: ''
    }
    const updatedPostText = 'Updated newPostText';
    const endStart = profileReducer(startState, updateNewPostTextAC(updatedPostText));

    expect(endStart.newPostText).toBe(updatedPostText);
    expect(endStart.posts).toEqual(endStart.posts);

});