import React from "react";
import style from "./Paginator.module.css";

type PaginatorPropsType = {
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    changedPage: (pageNumber: number) => void;
}
const Paginator: React.FC<PaginatorPropsType> = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {
                pages.map(p => <span key={p}
                                     className={props.currentPage === p ? style.selectedPage : ''}
                                     onClick={(e) => {
                                         props.changedPage(p);
                                     }}>{p}
                        </span>)
            }
        </div>
    );
}

export default Paginator;