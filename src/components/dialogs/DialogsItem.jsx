import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import {NavLink} from "react-router-dom";


const DialogsItem = (props) => {
    return (
        <NavLink to={/dialogs/ + props.id} className="dialogs__item">
            <div className="dialogs__img">
                <PersonIcon style={{color: "white"}}/>
            </div>
            <span className="dialogs__name">{props.name}</span>
        </NavLink>
    )
}

export default DialogsItem
