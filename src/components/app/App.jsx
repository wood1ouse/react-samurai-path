import React from 'react'
import {connect, Provider} from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "../header/Header";
import ProfileContainer from "../profile/ProfileContainer";
import DialogsContainer from "../dialogs/DialogsContainer";
import UsersContainer from "../users/UsersContainer";
import Login from "../login/Login";
import {withRouter} from "react-router";
import {compose} from "redux";
import {initialise} from "../../redux/appReducer";
import '../../scss/index.scss';
import Preloader from "../common/preloader/Preloader";
import store from "../../redux/reduxStore";


class App extends React.Component {

    componentDidMount() {
        this.props.initialise()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
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
                        <Route path='/login'
                               render={() => <Login/>}/>
                    </div>
                </div>

        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initialise}))(App)

export const SamuraiJSApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )

}