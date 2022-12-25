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

    replaceShow = (id, title) =>{
        //params
        this.props.history.replace(`/home/message/detail/${id}/${title}`)

        // url parameters
        // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

        // state parameters
        // this.props.history.replace(`/home/message/detail`, {id:id,title:title})


    }

    pushShow = (id, title) =>{
        this.props.history.push(`/home/message/detail/${id}/${title}`)
    }

    back = () =>{
        this.props.history.goBack()
    }

    forward = () =>{
        this.props.history.goForward()
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.message.map((message)=>{
                        return(
                        <li key={message.id}>
                            {/*pass parameters */}
                            <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link>

                            &nbsp; <button onClick={() => this.pushShow(message.id, message.title)}>push</button>
                            &nbsp; <button onClick={() => this.replaceShow(message.id, message.title)}>replace</button>

                            {/*query parameters*/}
                            {/*<Link to={`/home/message/detail?id=${message.id}&title=${message.title}`}>{message.title}</Link>*/}

                            {/*state parameters    */}
                            {/*<Link replace to={{pathname:'/home/message/detail', state:{id:message.id, title:message.title}}}>{message.title}</Link>*/}
                        </li>
                        )
                    })}

                </ul>
                {/*receive the parameters*/}
                <Route path='/home/message/detail/:id/:title' component={Detail}></Route>


                {/*<Route path='/home/message/detail' component={Detail}></Route>*/}

                {/*<Route path='/home/message/detail' component={Detail}></Route>*/}


                <button onClick={this.back}>back</button>
                &nbsp;
                <button onClick={this.forward}>forward</button>
            </div>
        );
    }
}

export default Message;