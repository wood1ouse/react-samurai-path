import React from 'react';
import store from "./redux/reduxStore";
import './scss/index.scss';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App, {SamuraiJSApp} from "./components/app/App";
import {Provider} from 'react-redux'

ReactDOM.render(
    <SamuraiJSApp/>, document.getElementById('root'));