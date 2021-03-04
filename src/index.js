import React from 'react';
import store from "./redux/reduxStore";
import './scss/index.scss';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./components/app/App";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} dispatch = {store.dispatch.bind(store)} store = {store}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})
