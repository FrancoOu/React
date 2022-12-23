import React, {Component} from 'react';
import Detail from "./Detail/Detail";
import {Link, Route} from "react-router-dom";

class Message extends Component {

    state = {
        message: [
            {id:'1', title: 'message 1'},
            {id:'2', title: 'message 2'},
            {id:'3', title: 'message 3'},
        ]
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.message.map((message)=>{
                        return(
                        <li key={message.id}>
                            {/*pass parameters */}
                            {/*<Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link>*/}

                        {/*query parameters*/}
                            <Link to={`/home/message/detail?id=${message.id}&title=${message.title}`}>{message.title}</Link>

                        </li>
                        )
                    })}

                </ul>
                {/*receive the parameters*/}
                {/*<Route path='/home/message/detail/:id/:title' component={Detail}></Route>*/}

                <Route path='/home/message/detail' component={Detail}></Route>


            </div>
        );
    }
}

export default Message;