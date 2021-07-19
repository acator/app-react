import { useState } from "react";



let Pagination = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pageCount/10)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftEnd = (portionNumber -1)*10 +1;
    let rightEnd = portionNumber*10

    return(
        <div className="pagination_container">
            { portionNumber > 1 &&
           <button onClick = { () => {setPortionNumber(portionNumber-1)}}>back</button>
            }
            {pages.filter((d) => d >= leftEnd && d <= rightEnd).map(p => {
                return <div className="pages" onClick={() => { props.onPageChanged(p) }} ><span key={p.id} className={props.currentPage === p && "totalPage"}>{p}</span></div>

            })}
            { portionNumber < portionCount &&
                <button onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>
            }
        </div>

    )
}

export default Pagination;