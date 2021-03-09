import React from "react";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Navbar from "../navbar/Navbar";

class Header extends React.Component{
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <PeopleAltIcon style={{color: "white"}}/>
                    <span>Socially</span>
                </div>
                <Navbar/>
            </div>
        )
    }


}
export default Header
