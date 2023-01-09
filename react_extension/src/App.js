import React, {Component} from 'react';
import Demo from "./components/3_hooks";
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