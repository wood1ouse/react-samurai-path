import React from "react";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

export default class Header extends React.Component{
    render() {
        console.log(this.props.msg);
        return (
            <div className= "header">
                <div className="logo">
                    <PeopleAltIcon style={{color: "white"}}></PeopleAltIcon>
                    <span>Socially</span>
                </div>
                <nav className= "navbar">
                    <div>Profile</div>
                    <div>Messages</div>
                </nav>
            </div>
        );
    }
}


