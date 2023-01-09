import React, {Component} from 'react';
import Demo from "./components/2_lazyLoad";
import {BrowserRouter} from 'react-router-dom'
class App extends Component {
    render() {
        return (

            <BrowserRouter>

                    <Demo/>

            </BrowserRouter>
        );
    }
}

export default App;