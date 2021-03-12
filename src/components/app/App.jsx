import React from 'react'
import {Route} from "react-router-dom";
import Header from "../header/Header";
import ProfileContainer from "../profile/ProfileContainer";
import DialogsContainer from "../dialogs/DialogsContainer";
import UsersContainer from "../users/UsersContainer";
import '../../scss/index.scss';


const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer/>}/>
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>
                <Route path='/users'
                       render={() => <UsersContainer/>}/>
            </div>
        </div>
    )
}

export default App
