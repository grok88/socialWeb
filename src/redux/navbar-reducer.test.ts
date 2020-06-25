import {v1} from "uuid";
import profileReducer, {ProfileReducerInitialStateType, addPostAC, updateNewPostTextAC} from "./profile-reducer";
import navbarReducer, {
    addFriendsAC,
    addFriendsACType,
    navbarReducerInitialStateType,
    addNameToNewFriendsAC,
    addUrlToNewFriendsAC
} from "./navbar-reducer";

test('correct friend should be added to  FriendsBlock', () => {
    const startState: navbarReducerInitialStateType = {
        friends: [
            {
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSU8ZWLKMXxuUe7g8j7zCfYZ3BcxuXlxPwBmSV_Mv_Bf9kvMg6F&usqp=CAU',
                name: 'Jora',
                id: v1()
            },
        ],
        addFriends: {
            id: '',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSU8ZWLKMXxuUe7g8j7zCfYZ3BcxuXlxPwBmSV_Mv_Bf9kvMg6F&usqp=CAU',
            name: 'Grok'
        }
    }
    const endStart = navbarReducer(startState, addFriendsAC());
    if (endStart) {
        expect(endStart.friends.length).toBe(2);
        expect(endStart.friends[1].url).toBe(startState.addFriends.url);
        expect(endStart.friends[1].name).toBe(startState.addFriends.name);
        expect(endStart.friends[1]).toBeDefined();
    }
});

test('correct name should be added to  addFriends.name', () => {
    const startState: navbarReducerInitialStateType = {
        friends: [
            {
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSU8ZWLKMXxuUe7g8j7zCfYZ3BcxuXlxPwBmSV_Mv_Bf9kvMg6F&usqp=CAU',
                name: 'Jora',
                id: v1()
            },
        ],
        addFriends: {
            id: '',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSU8ZWLKMXxuUe7g8j7zCfYZ3BcxuXlxPwBmSV_Mv_Bf9kvMg6F&usqp=CAU',
            name: 'Grok'
        }
    }
    const name = "Serg";
    const endStart = navbarReducer(startState, addNameToNewFriendsAC(name));
    if (endStart) {
        expect(endStart.friends.length).toBe(1);
        expect(endStart.addFriends.name).toBe(name);
        expect(endStart.addFriends.url).toEqual(startState.addFriends.url);
    }
});
test('correct url should be added to  addFriends.name', () => {
    const startState: navbarReducerInitialStateType = {
        friends: [
            {
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSU8ZWLKMXxuUe7g8j7zCfYZ3BcxuXlxPwBmSV_Mv_Bf9kvMg6F&usqp=CAU',
                name: 'Jora',
                id: v1()
            },
        ],
        addFriends: {
            id: '',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSU8ZWLKMXxuUe7g8j7zCfYZ3BcxuXlxPwBmSV_Mv_Bf9kvMg6F&usqp=CAU',
            name: 'Grok'
        }
    }
    const url = "https://tut.by";
    const endStart = navbarReducer(startState, addUrlToNewFriendsAC(url));
    if (endStart) {
        expect(endStart.friends.length).toBe(1);
        expect(endStart.addFriends.url).toBe(url);
        expect(endStart.addFriends.name).toEqual(startState.addFriends.name);
    }
});

