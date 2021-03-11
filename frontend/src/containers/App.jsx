import React from "react";
import {hot} from 'react-hot-loader'

import "../styles/App.css";
import UsersTable from "./UsersTable";

const App = () => {

    return (
        <div className="App">
            <h1>Hello World</h1>
            <UsersTable />
        </div>
    );
}

export default hot(module)(App);