import React, {useEffect} from "react";
import userPhoto from '../../assets/images/green.png'
import style from './UsersTemp.module.css'
import {NavLink} from "react-router-dom";
import {statuses, usersTempReducerType} from "../../redux/usersTemp-reducer";
import API from '../../assets/api';
import preloader from '../../assets/images/puff.svg';

type usersTempPropsType = {
    status: string,
    usersTemp: Array<any>,
    setUsers: (users: Array<usersTempReducerType>) => void,
    setStatus: (status: string) => void,
    currentPage: number,
    pageSize: number,
    totalUserTempCount: number,
    setCurrentPage: (curretPage: number) => void
}
const UsersTemp = (props: usersTempPropsType) => {
    const {usersTemp = [], status, setStatus, setUsers, currentPage, pageSize, totalUserTempCount, setCurrentPage} = props;

    useEffect(() => {
        console.log(currentPage);
        API.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                setStatus(statuses.SUCCESS);
                setUsers(res.data.items);
            })
    }, []);

    if (status === statuses.NOT_INITIALAZED) {
        return <img src={preloader} alt="preloader"/>
    }

    let countPage = Math.ceil(totalUserTempCount / pageSize);
    let countPageArr = [];
    for (let i = 1; i <= countPage; i++) {
        countPageArr.push(i);
    }

    const changePage = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        API.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(res => {
                setUsers(res.data.items);
            })
    }

    return (
        <div>
            {!usersTemp.length && <span>Users not found</span>}
            {
                countPageArr.map(page => <span key={page}
                                               className={currentPage === page ? style.currentPage : ""}
                                               onClick={() => {
                                                   changePage(page);
                                               }}
                >{page}</span>)
            }
            {usersTemp.map(user => <div key={user.id} className={style.user}>
                <div>
                    <img src={user.photos.small ? user.photos.small : userPhoto} alt=""/>
                </div>
                <div>
                    <NavLink to={`usersTemp/${user.id}`}>{user.name}</NavLink>
                    <span>{user.status}</span>
                </div>
            </div>)}
        </div>
    )
}
export default UsersTemp;