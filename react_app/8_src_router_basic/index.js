//import React
import React from 'react';
import {BrowserRouter} from "react-router-dom";
//import react-dom
import ReactDOM from "react-dom/client";
//import App component
import App from './App';

//render App

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter><App/></BrowserRouter>);

