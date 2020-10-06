import React from "react";
import style from "./Paginator.module.css";

type PaginatorPropsType = {
    pageSize: number;
    totalItemsCount: number;
    currentPage: number;
    changedPage: (pageNumber: number) => void;
    portionSize: number;
    portionNumber: number;
    setPortionNumber: (portionNum: number) => void;
}
const Paginator: React.FC<PaginatorPropsType> = (props) => {

    let pageCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pageCount / props.portionSize);
    // const [portionNumber, setPortionNumber] = useState<number>(1);
    const leftPortionPageNumber = (props.portionNumber - 1) * props.portionSize + 1;
    const rightPortionPageNumber = props.portionNumber * props.portionSize;


    return (
        <div>
            {props.portionNumber > 1 && <button onClick={() => {
                props.setPortionNumber(props.portionNumber - 1)
            }}>назад</button>}
            {
                pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => <span key={p}
                                    className={props.currentPage === p ? style.selectedPage : ''}
                                    onClick={(e) => {
                                        props.changedPage(p);
                                    }}>{p}
                        </span>)
            }
            {
                portionCount > props.portionNumber &&
				<button onClick={() => {
                    props.setPortionNumber(props.portionNumber + 1)
                }}>вперед</button>
            }
        </div>
    );
}

export default Paginator;