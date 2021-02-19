import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import {NavLink} from "react-router-dom";


export default class DialogsItem extends React.Component{
    render() {
        const url = `/dialogs/${this.props.id}`
        return (
            <NavLink to ={url} className="dialogs__item">
                <div className="dialogs__img">
                    <PersonIcon style={{color: "white"}}/>
                </div>
                <span className="dialogs__name">{this.props.name}</span>
            </NavLink>
        )
    }
}
