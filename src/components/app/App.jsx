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
                       render={() => <Profile profile={props.appState.profilePage}
                                              addPost = {props.addPost}
                                              updateNewPostText = {props.updateNewPostText}/>}/>
                <Route path='/dialogs'
                       render={() => <Dialogs dialogs={props.appState.dialogsPage}
                                              addMessage = {props.addMessage}
                                              updateNewMessageText = {props.updateNewMessageText}/>}/>
            </div>
        </div>
    )
}

export default App
