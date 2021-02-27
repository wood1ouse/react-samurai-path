import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./components/app/App";
import {addPost} from "./redux/state";

export let rerenderEntireTree =  (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App appState = {state} addPost = {addPost}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
