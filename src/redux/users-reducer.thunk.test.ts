import {actions, follow, unfollow} from './users-reducer';
import {userApi} from '../api/users-api';
import {APIResponseType, ResultCodeEnum} from '../api/api';

jest.mock('../api/users-api');
const userApiMock = userApi as jest.Mocked<typeof userApi>;


const dispatchMock = jest.fn();
const getStateMock = jest.fn();
beforeEach(()=>{
    dispatchMock.mockClear();
    getStateMock.mockClear();
    userApiMock.follow.mockClear();
    userApiMock.unFollow.mockClear();
})

const result: APIResponseType = {
    data: {},
    resultCode: ResultCodeEnum.Success,
    messages: []
}

userApiMock.follow.mockReturnValue(Promise.resolve(result));
userApiMock.unFollow.mockReturnValue(Promise.resolve(result));



test('success follow thunk', async () => {
    const thunk = follow('1');

    await thunk(dispatchMock, getStateMock, {});

    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingInProgress(true, '1'));
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess('1'));
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingInProgress(false, '1'));
});
test('success unfollow thunk', async () => {
    const thunk = unfollow('1');

    await thunk(dispatchMock, getStateMock, {});

    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingInProgress(true, '1'));
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unFollowSuccess('1'));
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingInProgress(false, '1'));
});