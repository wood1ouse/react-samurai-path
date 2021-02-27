import React from 'react';
import state from "./redux/state";
import reportWebVitals from './reportWebVitals';
import './scss/index.scss';
import {rerenderEntireTree} from "./render";


rerenderEntireTree(state)


reportWebVitals();
