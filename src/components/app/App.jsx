import React from 'react'
import {Route, BrowserRouter} from "react-router-dom";
import Header from "../header/Header";
import MainPage from "../mainpage/MainPage";
import Dialogs from "../dialogs/Dialogs";
import '../../scss/index.scss';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="wrapper">
                    <Header msg="hello from props"/>
                    <div className="content">
                        <Route path = '/profile'component={MainPage}/>
                        <Route path = '/dialogs' component={Dialogs}/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
