import React, {useEffect, useState} from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import {UsersSearchForm} from './UsersSearchForm';
import {follow, requestUsers, unfollow, UsersReducerFilterType} from '../../redux/users-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentPage, getFilter, getPageSize, getTotalUsersCount, getUsers} from '../../redux/users-selectors';
import {useHistory} from 'react-router-dom';
import * as queryString from 'querystring';
import {Col, Divider, Row} from 'antd';

type QueryParamType = { page?: string, term?: string, friend?: string }

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
            const search = history.location.search.substr(1);
            const parsed = queryString.parse(search) as QueryParamType

            let actualPage = currentPage;
            if (!!parsed.page) actualPage = Number(parsed.page);

            let actualFilter = filter;
            if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term}
            switch (parsed.friend) {
                case 'null' :
                    actualFilter = {...actualFilter, friend: null}
                    break;
                case 'true' :
                    actualFilter = {...actualFilter, friend: true}
                    break;
                case 'false' :
                    actualFilter = {...actualFilter, friend: false}
                    break;
            }
            dispatch(requestUsers(actualPage, pageSize, actualFilter));
        }, []
    )
    ;

    useEffect(() => {
        let query: QueryParamType = {};
        if (!!filter.term) query.term = filter.term;
        if (filter.friend !== null) query.friend = String(filter.friend);
        if (currentPage !== 1) query.page = String(currentPage);

        history.push({
            pathname: '/users',
            // 1 variant
            // search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
            //2 variant
            search: queryString.stringify(query)
        })
    }, [filter, currentPage])

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
            <div className="site-card-wrapper">
                <Divider orientation="left">Users</Divider>
                <Row gutter={
                    // { xs: 8, sm: 16, md: 24, lg: 32 }
                    [{xs: 8, sm: 16, md: 24, lg: 32}, {xs: 8, sm: 16, md: 24, lg: 32}]
                }>
                    {
                        users.map(user => {
                            const unFollowHandler = () => {
                                dispatch(unfollow(user.id));
                            }
                            const followHandler = () => {
                                dispatch(follow(user.id));
                            }
                            return (
                                <Col className="gutter-row"
                                    // span={8}
                                     xs={{span: 24}}
                                     sm={{span: 12}}
                                     md={{span: 8}}
                                     lg={{span: 6}}
                                     xxl={{span: 4}}
                                >
                                    <User user={user} follow={followHandler} unfollow={unFollowHandler} key={user.id}/>
                                </Col>
                            );
                        })
                    }
                </Row>
            </div>
        </div>
    );
}



