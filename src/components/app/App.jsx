import React from 'react'
import {Route} from "react-router-dom";
import Header from "../header/Header";
import Profile from "../profile/Profile";
import '../../scss/index.scss';
import DialogsContainer from "../dialogs/DialogsContainer";
import UsersContainer from "../users/UsersContainer";


const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path='/profile'
                       render={() => <Profile/>}/>
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>
                <Route path='/users'
                       render={() => <UsersContainer/>}/>
            </div>
        </div>
    )
}

export default App
