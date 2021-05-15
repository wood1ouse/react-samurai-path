import React from 'react'
import {SamuraiJSApp} from "./App";
import ReactDOM from "react-dom";

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SamuraiJSApp/>, div)
    ReactDOM.unmountComponentAtNode(div)
})