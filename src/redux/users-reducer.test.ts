import {v1} from "uuid";
import usersReducer, {follow, UsersReducerInitialStateType, unFollow, setUsers, UserType} from "./users-reducer";

let startState : UsersReducerInitialStateType;
beforeEach(() => {
    startState = {
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
        ],
        pageSize:0,
        totalUsersCount: 0,
        currentPage: 0
    }
})

test('Status unfollow should be changed to follow', () => {

    const id = '1';
    const endState = usersReducer(startState, follow(id));

    expect(endState.users[1]).toEqual(endState.users[1]);
    expect(endState.users[0].followed).toBe(true);

});
test('Status follow should be changed to unfollow', () => {

    const id = '2';
    const endState = usersReducer(startState, unFollow(id));

    expect(endState.users[0]).toEqual(endState.users[0]);
    expect(endState.users[1].followed).toBe(false);

});

test('Sets correct user to usersReducer.users', () => {

    const newUsers: Array<UserType> = [
        {
            id: '3',
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

    const endState = usersReducer(startState, setUsers(newUsers));

    expect(endState.users[0]).toBeDefined();
    expect(endState.users[0].id).toBe('3');
    expect(endState.users[0].name).toBe('Sergey');
    expect(endState.users.length).toBe(1);
});