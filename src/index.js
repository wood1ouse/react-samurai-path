import React from 'react';
import store from "./redux/reduxStore";
import './scss/index.scss';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./components/app/App";
import {Provider} from 'react-redux'

let rerenderEntireTree = () => {
    ReactDOM.render(
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

