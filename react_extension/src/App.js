import React, {Component} from 'react';
import Demo from "./components/7_renderProps";
import {BrowserRouter} from 'react-router-dom'
class App extends Component {
    render() {
        return (

            <BrowserRouter>

                    <Demo root={this.props.root}/>

            </BrowserRouter>
        );
    }
}

export default App;