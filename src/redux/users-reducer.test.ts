import usersReducer, {actions, UsersReducerInitialStateType} from './users-reducer';
import {UserType} from '../types/types';

let startState: UsersReducerInitialStateType;
beforeEach(() => {
    startState = {
        users: [
            {
                id: '1',
                userUrl: 'https://www.dw.com/image/47372909_303.jpg',
                followed: false,
                photos: {
                    small: null,
                    large: null
                },
                name: 'Alex',
                status: 'I am big',
                location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                id: '2',
                userUrl: 'https://www.dw.com/image/47372909_303.jpg',
                followed: true,
                photos: {
                    small: null,
                    large: null
                },
                name: 'Sergey',
                status: 'I am big too',
                location: {country: 'Belarus', city: 'Pinsk'}
            },
        ],
        pageSize: 0,
        totalUsersCount: 0,
        currentPage: 0,
        isFetching: false,
        followingInProgress: []
    }
})

test('Status unfollow should be changed to follow', () => {

    const id = '1';
    const endState = usersReducer(startState, actions.followSuccess(id));

    expect(endState.users[1]).toEqual(startState.users[1]);
    expect(endState.users[0].followed).toBeTruthy();

});
test('Status follow should be changed to unfollow', () => {

    const id = '2';
    const endState = usersReducer(startState, actions.unFollowSuccess(id));

    expect(endState.users[0]).toEqual(startState.users[0]);
    expect(endState.users[1].followed).toBe(false);

});
test('Sets correct user to usersReducer.users', () => {

    const newUsers: Array<UserType> = [
        {
            id: '3',
            userUrl: 'https://www.dw.com/image/47372909_303.jpg',
            followed: true,
            photos: {
                small: null,
                large: null
            },
            name: 'Sergey',
            status: 'I am big too',
            location: {country: 'Belarus', city: 'Pinsk'}
        }
    ]

    const endState = usersReducer(startState, actions.setUsers(newUsers));

    expect(endState.users[0]).toBeDefined();
    expect(endState.users[0].id).toBe('3');
    expect(endState.users[0].name).toBe('Sergey');
    expect(endState.users.length).toBe(1);
});
test('Sets current page to usersReducer', () => {
    const endState = usersReducer(startState, actions.setCurrentPage(5));

    expect(endState.currentPage).toBe(5);
});
test('Sets totalCount to usersReducer', () => {
    const endState = usersReducer(startState, actions.setUsersTotalCount(5));

    expect(endState.totalUsersCount).toBe(5);
});
test('isFetching should ne correct toggle (true-false)', () => {
    const endState = usersReducer(startState, actions.toggleIsFetching(true));

    expect(endState.isFetching).toBe(true);
});
test('FollowingInProgress should be correct work -> isFetching = true', () => {
    const endState = usersReducer(startState, actions.toggleFollowingInProgress(true, '1'));

    expect(endState.followingInProgress).toEqual(['1']);
});
test('FollowingInProgress should be correct work -> isFetching = false', () => {
    startState = {
        users: [
            {
                id: '1',
                userUrl: 'https://www.dw.com/image/47372909_303.jpg',
                followed: false,
                photos: {
                    small: null,
                    large: null
                },
                name: 'Alex',
                status: 'I am big',
                location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                id: '2',
                userUrl: 'https://www.dw.com/image/47372909_303.jpg',
                followed: true,
                photos: {
                    small: null,
                    large: null
                },
                name: 'Sergey',
                status: 'I am big too',
                location: {country: 'Belarus', city: 'Pinsk'}
            },
        ],
        pageSize: 0,
        totalUsersCount: 0,
        currentPage: 0,
        isFetching: false,
        followingInProgress: ['1']
    }
    const endState = usersReducer(startState, actions.toggleFollowingInProgress(false, '1'));

    expect(endState.followingInProgress).toEqual([]);
});