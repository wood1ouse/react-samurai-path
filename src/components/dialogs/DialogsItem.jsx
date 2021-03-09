import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import {NavLink} from "react-router-dom";


class DialogsItem  extends React.Component{
    render() {
        return (
            <NavLink to={/dialogs/ + this.props.id} className="dialogs__item">
                <div className="dialogs__img">
                    <PersonIcon style={{color: "white"}}/>
                </div>
                <span className="dialogs__name">{this.props.name}</span>
            </NavLink>
        )
    }

}

export default DialogsItem
