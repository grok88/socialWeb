import {actions, getUserProfile, getUserStatus, savePhoto, saveProfile, updateUserStatus} from './profile-reducer'
import {profileApi} from '../api/profile-api'
import {ProfileType} from '../components/profile/profileInfo/profileInfo';
import {APIResponseType, ResultCodeEnum} from '../api/api';
// типо вместо реального запроса на сервер - делаем фейковый
//объяснение смотреть 43min - 2.12
jest.mock('../api/profile-api');

const profileApiMock = profileApi as jest.Mocked<typeof profileApi>;
// Типо делаем фейковый ответ с сервера - который сидит в response в userApi.follow
const result: ProfileType = {
    aboutMe: '',
    contacts: {},
    fullName: '',
    lookingForAJobDescription: '',
    photos: {
        large: '',
        small: ''
    },
    userId: 1,
    lookingForAJob: true
}

const updateStatusResult: APIResponseType = {
    messages: [],
    resultCode: ResultCodeEnum.Success,
    data: {}
}
const savePhotoResult: APIResponseType<{ photos: { small: string, large: string } }> = {
    messages: [],
    resultCode: ResultCodeEnum.Success,
    data: {
        photos: { small: '', large: '' }
    }
}

profileApiMock.getUserProfileById.mockReturnValue(Promise.resolve(result));
profileApiMock.getStatus.mockReturnValue(Promise.resolve('2'));
profileApiMock.updateStatus.mockReturnValue(Promise.resolve(updateStatusResult));
profileApiMock.saveProfile.mockReturnValue(Promise.resolve(updateStatusResult));
profileApiMock.savePhoto.mockReturnValue(Promise.resolve(savePhotoResult));

// Делаем dispatch
let dispatchMock = jest.fn();
let getStateMock = jest.fn();

// Зачистка перед каждым тестом
beforeEach(() => {
    dispatchMock.mockClear();
    getStateMock.mockClear();
    profileApiMock.getUserProfileById.mockClear();
    profileApiMock.getStatus.mockClear();
    profileApiMock.updateStatus.mockClear();
    profileApiMock.saveProfile.mockClear();
    profileApiMock.savePhoto.mockClear();

})

test('Success getUsers', async () => {

    let thunk = getUserProfile('1');
    let res = await thunk(dispatchMock, getStateMock, {});

    expect(dispatchMock).toBeCalledTimes(1);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setUserProfile(result));
})
test('Success getUserStatus', async () => {

    let thunk = getUserStatus('1');
    let res = await thunk(dispatchMock, getStateMock, {});

    expect(dispatchMock).toBeCalledTimes(1);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setUserStatus('2'));
})
test('Success updateUserStatus', async () => {

    let thunk = updateUserStatus('New status');
    let res = await thunk(dispatchMock, getStateMock, {});

    expect(dispatchMock).toBeCalledTimes(1);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setUserStatus('New status'));
})
// test('Success savePhoto', async () => {
//     let file:any;
//     let thunk = savePhoto(file );
//     let res = await thunk(dispatchMock, getStateMock, {});
//
//     expect(dispatchMock).toBeCalledTimes(1);
//     // expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setUserStatus('New status'));
// })

// test('Success saveProfile', async () => {
//
//     let thunk = saveProfile({aboutMe:'',fullName:'',lookingForAJobDescription:''} );
//
//     let res = await thunk(dispatchMock, getStateMock, {});
//
//     expect(dispatchMock).toBeCalledTimes(1);
//     // expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setUserStatus('New status'));
// })