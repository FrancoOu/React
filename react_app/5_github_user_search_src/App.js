import React, {Component} from 'react';
import Search from "./components/Search";
import List from "./components/List";

class App extends Component {

    state = {
        users:[],
        isFirst:true, //first time opening the website
        isLoading:false,//loading or not
        err:'',//error
         }

    updateAppState = (state) =>{
        this.setState(state)
    }

    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                <List {... this.state}/>
            </div>
        );
    }
}

export default App;