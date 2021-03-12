import PersonIcon from "@material-ui/icons/Person";
import ClearIcon from "@material-ui/icons/Clear";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <>
            <div>
                {props.users.map(u =>
                    <div className={props.blured}>
                        <div className="users__item">
                            <div className="users__item__img">
                                <PersonIcon style={{fontSize: '36px'}}/>
                            </div>
                            <NavLink to={'/profile/' + `${u.id}`}>
                                <div className="users__item__name">
                                    {u.name}
                                </div>
                            </NavLink>
                            <div className="users__item__status">
                                {u.status}
                            </div>
                            <div className="users__item__personal">
                                <div className="users__item__country">
                                    {"u.location.country"}
                                </div>
                                <div className="users__item__city">
                                    {"u.location.city"}
                                </div>
                                <button>
                                    {u.followed
                                        ? <button onClick={() => {
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "643081c0-301d-4bcf-9ee1-90194ef76af6"
                                                }
                                            })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.unfollow(u.id)
                                                    }
                                                })

                                        }}><ClearIcon/></button>
                                        : <button onClick={() => {

                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "643081c0-301d-4bcf-9ee1-90194ef76af6"
                                                }
                                            })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.follow(u.id)
                                                    }
                                                })
                                        }}><AddIcon style={{fontSize: "30px"}}/></button>
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="users__pageList">
                {pages.map(p => {
                    return <span
                        className={props.currentPage === p ? "users__pageList__item selected" : "users__pageList__item"}
                        onClick={(e) => {
                            props.onPageChanged(p)
                        }}>{p}</span>
                })}
            </div>
        </>

    )

}

export default Users
