import React from 'react';
import store from "./redux/state";
import './scss/index.scss';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./components/app/App";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App appState={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}
                     addMessage={store.addMessage.bind(store)}
                     updateNewMessageText={store.UpdateNewMessageText.bind(store)}ma/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)
