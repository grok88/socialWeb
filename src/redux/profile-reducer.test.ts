import {v1} from "uuid";
import profileReducer, {ProfileReducerInitialStateType, addPostAC, deleteAC, setUserStatus} from "./profile-reducer";
import {ProfileInfoType, ProfileType} from "../components/profile/profileInfo/profileInfo";

let startState: ProfileReducerInitialStateType;
beforeEach(() => {
    startState = {
        posts: [
            {id: v1(), message: 'Hello, What are you doing?', likeCount: '5'},
            {id: v1(), message: 'Hi, I am learning TypeScript now.', likeCount: '13'},
            {id: '1', message: 'Hi,', likeCount: '6'},
        ],
        status: 'test',
        profile: null
    }
});

// test('correct post should be added to correct posts', () => {
//     const userProfile:ProfileType ={
//         userId:6,
//         contacts:{
//             'vk':'vk'
//         },
//
//     }
//     const endStart = profileReducer(startState, addPostAC(message));
//
//     expect(endStart.posts.length).toBe(4);
//     expect(endStart.posts[3].message).toBe(message);
//     expect(endStart.posts[3].likeCount).toBe('0');
//     expect(endStart.posts[3]).toBeDefined();
//
// });
test('correct statusText should be added to correct status', () => {
    const status = 'New Post message';

    const endStart = profileReducer(startState, setUserStatus(status));

    expect(endStart.status).toBeDefined();
    expect(endStart.status).toBe(status);

});
test('correct profile should be added to profileReducer', () => {
    const status = 'New Post message';

    const endStart = profileReducer(startState, setUserStatus(status));

    expect(endStart.status).toBeDefined();
    expect(endStart.status).toBe(status);

});

test('correct post should be deleted from  posts', () => {
    const endStart = profileReducer(startState, deleteAC('1'));

    expect(endStart.posts.length).toBe(2);
    expect(endStart.posts[2]).toBeUndefined();

});

