import React from "react";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import NavbarContainer from "../navbar/NavbarContainer";

class Header extends React.Component{
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <PeopleAltIcon style={{color: "white"}}/>
                    <span>Socially</span>
                </div>
                <NavbarContainer/>
            </div>
        )
    }


}
export default Header
