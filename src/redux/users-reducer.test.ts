import {v1} from "uuid";
import usersReducer, {followAC, usersReducerInitialStateType, unFollowAC, setUsersAC, userType} from "./users-reducer";

test('Status unfollow should be changed to follow', () => {
    const startState: usersReducerInitialStateType = {
        users: [
            {
                id: '1',
                userUrl: 'https://www.dw.com/image/47372909_303.jpg',
                followed: false,
                photos:{
                    small: null,
                    large:  null
                },
                name: 'Alex',
                status: 'I am big',
                location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                id: '2',
                userUrl: 'https://www.dw.com/image/47372909_303.jpg',
                followed: true,
                photos:{
                    small: null,
                    large:  null
                },
                name: 'Sergey',
                status: 'I am big too',
                location: {country: 'Belarus', city: 'Pinsk'}
            },
        ]
    }
    const id = '1';
    const endState = usersReducer(startState, followAC(id));

    expect(endState.users[1]).toEqual(endState.users[1]);
    expect(endState.users[0].followed).toBe(true);

});
test('Status follow should be changed to unfollow', () => {
    const startState: usersReducerInitialStateType = {
        users: [
            {
                id: '1',
                userUrl: 'https://www.dw.com/image/47372909_303.jpg',
                followed: false,
                photos:{
                    small: null,
                    large:  null
                },
                name: 'Alex',
                status: 'I am big',
                location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                id: '2',
                userUrl: 'https://www.dw.com/image/47372909_303.jpg',
                followed: true,
                photos:{
                    small: null,
                    large:  null
                },
                name: 'Sergey',
                status: 'I am big too',
                location: {country: 'Belarus', city: 'Pinsk'}
            },
        ]
    }
    const id = '2';
    const endState = usersReducer(startState, unFollowAC(id));

    expect(endState.users[0]).toEqual(endState.users[0]);
    expect(endState.users[1].followed).toBe(false);

});

test('Sets correct user to usersReducer.users', () => {
    const startState: usersReducerInitialStateType = {
        users: [
            {
                id: '1',
                userUrl: 'https://www.dw.com/image/47372909_303.jpg',
                followed: false,
                photos:{
                    small: null,
                    large:  null
                },
                name: 'Alex',
                status: 'I am big',
                location: {country: 'Belarus', city: 'Minsk'}
            },

        ]
    }
    const newUsers: Array<userType> = [
        {
            id: '2',
            userUrl: 'https://www.dw.com/image/47372909_303.jpg',
            followed: true,
            photos:{
                small: null,
                large:  null
            },
            name: 'Sergey',
            status: 'I am big too',
            location: {country: 'Belarus', city: 'Pinsk'}
        }
    ]

    const endState = usersReducer(startState, setUsersAC(newUsers));

    expect(endState.users[0]).toEqual(startState.users[0]);
    expect(endState.users[1]).toBeDefined();
    expect(endState.users[1].id).toBe('2');
    expect(endState.users[1].name).toBe('Sergey');
    expect(endState.users.length).toBe(2);
});