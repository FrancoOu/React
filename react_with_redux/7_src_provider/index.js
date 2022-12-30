//import React
import React from 'react';
//import react-dom
import ReactDOM from "react-dom/client";
//import App component
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";

//render App
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Provider store={store}><App/></Provider>)


export default App;