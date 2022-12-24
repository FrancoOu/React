import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
class Header extends Component {

    back = () =>{
        this.props.history.goBack()
    }

    forward = () =>{
        this.props.history.goForward()
    }

    render() {
        return (
            <div className="col-xs-offset-2 col-xs-8">
                <div className="page-header"><h2>React Router Demo</h2></div>
                <button onClick={this.back}>back</button>
                &nbsp;
                <button onClick={this.forward}>forward</button>
            </div>
        );
    }
}

export default withRouter(Header);
// make the normal component a routing-component-like component, so we can use the APIs in routing component