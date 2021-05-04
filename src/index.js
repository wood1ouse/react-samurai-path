import React from 'react';
import store from "./redux/reduxStore";
import './scss/index.scss';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./components/app/App";
import {Provider} from 'react-redux'

let rerenderEntireTree = () => {
    ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

