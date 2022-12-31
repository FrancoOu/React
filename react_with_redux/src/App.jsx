import React, {Component} from 'react';
import Count from "./containers/Count/Count";
import Person from "./containers/Person/Person";

class App extends Component {
    render() {
        return (
            <div>
                <Count/>
                <hr/>
                <Person/>
            </div>
        );
    }
}

export default App;