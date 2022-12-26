//import React
import React from 'react';
import {BrowserRouter} from "react-router-dom";
//import react-dom
import ReactDOM from "react-dom/client";
//import App component
import App from './App';
import {ConfigProvider} from "antd";

//render App

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ConfigProvider
        theme={{
            token: {colorBgContainer: '#15ddda'
            },
        }}
    >
    <BrowserRouter><App/></BrowserRouter>
    </ConfigProvider>);


export default App;