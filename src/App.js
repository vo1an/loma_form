import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import DisplayFormDataInTable from "./components/DisplayFormDataInTable";


function App() {
    return ( <
        DisplayFormDataInTable / >

    );
}

export default App;