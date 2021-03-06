import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from '@material-ui/icons/Add';

const User = (props) => {
    return (
        <div className="users__item">
            <div className="users__item__img">
                <PersonIcon style={{fontSize: '36px'}}/>
            </div>
            <div className="users__item__name">
                {props.fullName}
            </div>
            <div className="users__item__status">
                {props.status}
            </div>
            <div className="users__item__personal">
                <div className= "users__item__country">
                    {props.location.country}
                </div>
                <div className="users__item__city">
                    {props.location.city}
                </div>
                <button>
                    <AddIcon />
                </button>
            </div>

        </div>
    )
}

export default User
