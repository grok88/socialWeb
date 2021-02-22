import React, {useEffect, useState} from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import {UsersSearchForm} from './UsersSearchForm';
import {follow, requestUsers, unfollow, UsersReducerFilterType} from '../../redux/users-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentPage, getFilter, getPageSize, getTotalUsersCount, getUsers} from '../../redux/users-selectors';
import {useHistory} from 'react-router-dom';

export const Users = () => {
    const [portionNumber, setPortionNumber] = useState<number>(1);
    const pageSize = useSelector(getPageSize);
    const totalUsersCount = useSelector(getTotalUsersCount);
    const currentPage = useSelector(getCurrentPage);
    const filter = useSelector(getFilter);
    const users = useSelector(getUsers);


    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        history.push({
            pathname: '/users',
            search: `?term=${filter.term}&friend=${filter.friend}`
        })
    }, [filter])

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, filter));
    }, []);

    const changeFilter = (filter: UsersReducerFilterType) => {
        dispatch(requestUsers(1, pageSize, filter));
    }

    const changedPage = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter));
    }


    return (
        <div>
            <UsersSearchForm changeFilter={changeFilter}/>
            <Paginator portionNumber={portionNumber} pageSize={pageSize} totalItemsCount={totalUsersCount}
                       currentPage={currentPage}
                       changedPage={changedPage} portionSize={10} setPortionNumber={setPortionNumber}/>
            {
                users.map(user => {
                    const unFollowHandler = () => {
                        dispatch(unfollow(user.id));
                    }
                    const followHandler = () => {
                        dispatch(follow(user.id));
                    }
                    return (
                        <User user={user} follow={followHandler} unfollow={unFollowHandler} key={user.id}/>
                    );
                })
            }
        </div>
    );
}



