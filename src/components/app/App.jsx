import React from 'react'
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import Header from "../header/Header";
import '../../scss/index.scss';
import Content from "../content/Content";

class App extends React.Component {
    render() {
        return (
            <div className= "wrapper">
                <Header msg = "hello from props"/>
                {/*<Content></Content>*/}

            </div>
        )
    }

}

export default App;
