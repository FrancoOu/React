import React, {Component} from 'react';
import News from "./News/News";
import Message from "./Message/Message";
import MyNavLink from "../../component/MyNavLink/MyNavLink";
import {Redirect, Route, Switch} from "react-router-dom";
class Home extends Component {
    render() {
        return (

            <div>
                <h3>I am home</h3>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink  to="news">News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink  to="message">Message</MyNavLink>
                        </li>
                    </ul>
                    <Switch>
                        <Route path='/home/news' component={News}/>
                        <Route path='/home/message' component={Message}/>
                        <Redirect to={'/home/news'}/>
                    </Switch>
                </div>
            </div>

        );
    }
}

export default Home;