import React, {Component} from "react";

import {Route, Switch} from 'react-router-dom';
import About from "./pages/About/About"; //router component
import Home from "./pages/Home/Home"; //router component
import Header from "./component/Header/Header"; // custom component
import MyNavLink from "./component/MyNavLink/MyNavLink";

//Create component
export default class App extends Component {

    render() {
        return (
            <div>

                    <div className="row">
                    <Header/>
                    </div>
                    <div className="row">
                        <div className="col-xs-2 col-xs-offset-2">
                            <div className="list-group">
                                {/* original routing */}
                                {/*<a className="list-group-item" href="./about.html">About</a>*/}
                                {/*<a className="list-group-item active" href="./home.html">Home</a>*/}

                                {/*router should be applied here*/}

                                <MyNavLink to='/about/adsdsad'>About</MyNavLink>
                                <MyNavLink to='/home/das/sadasdasd'>Home</MyNavLink>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="panel">
                                <div className="panel-body">
                                    {/*<h3>我是Home的内容</h3>*/}
                                    {/* A <Switch> looks through its children <Route>s and
                                        renders the first one that matches the current URL. */}
                                    <Switch>
                                    {/*
                                    exact:
                                    When true, the active class/style will only be applied if the location is matched exactly.*/}
                                    <Route exact path='/about' component={About}/>
                                    <Route path='/home' component={Home}/>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>


            </div>
        );
    }

}

