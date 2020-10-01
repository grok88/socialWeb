import React, {useState} from "react";
import style from "./Paginator.module.css";

type PaginatorPropsType = {
    pageSize: number;
    totalItemsCount: number;
    currentPage: number;
    changedPage: (pageNumber: number) => void;
    portionSize: number;
}
const Paginator: React.FC<PaginatorPropsType> = (props) => {

    let pageCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pageCount / props.portionSize);
    const [portionNumber, setPortionNumber] = useState<number>(1);
    const leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    const rightPortionPageNumber = portionNumber * props.portionSize;

    console.log('portionNumber - ' + portionNumber)
    console.log('leftPortionPageNumber - ' + leftPortionPageNumber)
    console.log('rightPortionPageNumber - ' +rightPortionPageNumber)

    return (
        <div>
            {portionNumber > 1 && <button onClick={() => {
                setPortionNumber(portionNumber - 1)
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
                portionCount > portionNumber &&
				<button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>вперед</button>
            }
        </div>
    );
}

export default Paginator;