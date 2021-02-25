import React from 'react'
import {Route, BrowserRouter} from "react-router-dom";
import Header from "../header/Header";
import Profile from "../profile/Profile";
import Dialogs from "../dialogs/Dialogs";
import '../../scss/index.scss';


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route path='/profile'
                           render={() => <Profile profile={props.appState.profilePage}/>}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs items={props.appState.dialogsPage}
                                                  messages={props.appState.dialogsPage}/>}/>

                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
