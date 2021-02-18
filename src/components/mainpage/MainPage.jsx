import React from "react";
import PersonIcon from '@material-ui/icons/Person';

export default class MainPage extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="profile">
                    <div className="profile__img">
                        <PersonIcon className="img__content" style={{color: "white", fontSize: "86px"}}/>
                    </div>
                    <span className="profile__personal">
                            <span className="profile__status">Online</span>
                            <span className="profile__name">Gena</span>
                            <span className="profile__lastname">Kochev</span>
                        </span>
                </div>
            </div>
        )
    }
}
