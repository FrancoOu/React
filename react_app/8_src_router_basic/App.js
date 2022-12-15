import React, {Component} from "react";

import {Link, Route} from 'react-router-dom';
import About from "./components/About/About";
import Home from "./components/Home/Home";

//Create component
export default class App extends Component {

    render() {
        return (
            <div>

                    <div className="row">
                        <div className="col-xs-offset-2 col-xs-8">
                            <div className="page-header"><h2>React Router Demo</h2></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-2 col-xs-offset-2">
                            <div className="list-group">
                                {/* original routing */}
                                {/*<a className="list-group-item" href="./about.html">About</a>*/}
                                {/*<a className="list-group-item active" href="./home.html">Home</a>*/}

                                {/*router should be applied here*/}

                                <Link className="list-group-item" to='/about'>
                                    About
                                </Link>
                                <Link className="list-group-item" to='/home'>
                                    home
                                </Link>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="panel">
                                <div className="panel-body">
                                    {/*<h3>我是Home的内容</h3>*/}

                                    <Route path='/about' component={About}/>
                                    <Route path='/home' component={Home}/>
                                </div>
                            </div>
                        </div>
                    </div>


            </div>
        );
    }

}

