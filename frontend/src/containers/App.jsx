import React from "react";
import {hot} from 'react-hot-loader'

import "../styles/App.css";
import UsersTable from "../containers/UsersTable";

const App = () => {

    return (
        <div className="App">
            <UsersTable />
        </div>
    );
}

export default hot(module)(App);