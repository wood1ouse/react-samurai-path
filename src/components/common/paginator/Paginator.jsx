import React from "react";

export const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className="users__pageList">
            {pages.map(p => {
                return <span
                    className={props.currentPage === p ? "users__pageList__item selected" : "users__pageList__item"}
                    onClick={(e) => {
                        props.onPageChanged(p)
                    }}>{p}</span>
            })}
        </div>
    )
}