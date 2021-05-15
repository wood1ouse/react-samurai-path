import PersonIcon from "@material-ui/icons/Person";
import ClearIcon from "@material-ui/icons/Clear";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import {NavLink} from "react-router-dom";
import {Paginator} from "../common/paginator/Paginator";

let Users = (props) => {
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
                                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                  onClick={() => {
                                                      props.unfollow(u.id)

                                                  }}><ClearIcon/></button>
                                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                  onClick={() => {
                                                      props.follow(u.id)
                                                  }}><AddIcon style={{fontSize: "30px"}}/></button>
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                       currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
        </>

    )

}


export default Users
