import React from 'react'
import {Route} from "react-router-dom";
import Header from "../header/Header";
import Profile from "../profile/Profile";
import Dialogs from "../dialogs/Dialogs";
import '../../scss/index.scss';


const App = (props) => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path='/profile'
                       render={() => <Profile store = {props.store} state = {props.state.profilePage} dispatch = {props.state.dispatch}/>}/>
                <Route path='/dialogs'
                       render={() => <Dialogs store = {props.store} state = {props.state.dialogsPage} dispatch = {props.state.dispatch}/>}/>
            </div>
        </div>
    )
}

export default App
