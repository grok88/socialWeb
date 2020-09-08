import {AppRootState} from "./redux-store";
import {createSelector} from 'reselect'

export const getIsFetching = (state: AppRootState) => {
    return state.usersPage.isFetching;
}
export const getUsersSelector = (state: AppRootState) => {
    return state.usersPage.users;
}
// export const getUsersSelectorTest = (state: AppRootState) => {
//     return getUsersSelector(state).filter(user => true);
// }
export const getUsers = createSelector(getUsersSelector,getIsFetching, (users, isFetching) => {
    return users.filter(user => true);
});

export const getPageSize = (state: AppRootState) => {
    return state.usersPage.pageSize;
}
export const getTotalUsersCount = (state: AppRootState) => {
    return state.usersPage.totalUsersCount;
}
export const getCurrentPage = (state: AppRootState) => {
    return state.usersPage.currentPage;
}
export const getFollowingInProgress = (state: AppRootState) => {
    return state.usersPage.followingInProgress;
}
