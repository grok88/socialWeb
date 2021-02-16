import {actions, follow, unfollow} from './users-reducer';
import {userApi} from '../api/users-api';
import {APIResponseType, ResultCodeEnum} from '../api/api';
// типо вместо реального запроса на сервер - делаем фейковый
//объяснение смотреть 43min - 2.12
jest.mock('../api/users-api');
const userApiMock = userApi as jest.Mocked<typeof userApi>;

// Типо делаем фейковый ответ с сервера - который сидит в response в userApi.follow
const result: APIResponseType = {
    messages: [],
    resultCode: ResultCodeEnum.Success,
    data: {}
}

userApiMock.follow.mockReturnValue(Promise.resolve(result));
userApiMock.unFollow.mockReturnValue(Promise.resolve(result));

// Делаем dispatch
const dispatchMock = jest.fn();
const getStateMock = jest.fn();

// Зачистка перед каждым тестом
beforeEach(() => {
    dispatchMock.mockClear();
    getStateMock.mockClear();
    userApiMock.follow.mockClear();
    userApiMock.unFollow.mockClear();

})

test('Success follow thunk', async () => {
    let thunk = follow('1');

    await thunk(dispatchMock, getStateMock, {});


    expect(dispatchMock).toBeCalledTimes(3);
    // Вручную перебираем вызов дисратчей -> что должен вызвать 1 диспатч, 2 и так далее
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingInProgress(true, '1'));
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess('1'));
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingInProgress(false, '1'));
})

test('Success unfollow thunk', async () => {
    let thunk = unfollow('1');

    await thunk(dispatchMock, getStateMock, {});


    expect(dispatchMock).toBeCalledTimes(3);
    // Вручную перебираем вызов дисратчей -> что должен вызвать 1 диспатч, 2 и так далее
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingInProgress(true, '1'));
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unFollowSuccess('1'));
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingInProgress(false, '1'));
})