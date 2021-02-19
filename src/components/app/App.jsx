import React from 'react'
import {Route, BrowserRouter} from "react-router-dom";
import Header from "../header/Header";
import Profile from "../profile/Profile";
import Dialogs from "../dialogs/Dialogs";
import '../../scss/index.scss';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="wrapper">
                    <Header/>
                    <div className="content">
                        <Route path='/profile' component={Profile}/>
                        <Route path='/dialogs' component={Dialogs}/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
