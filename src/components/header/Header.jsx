import React from "react";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Navbar from "../navbar/Navbar";

const Header = () => {
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
export default Header
