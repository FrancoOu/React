import React, {Component} from 'react';
import PubSub from 'pubsub-js'

import './index.css'
class List extends Component {

    state = {
        users:[],
        isFirst:true, //first time opening the website
        isLoading:false,//loading or not
        err:'',//error
    }

    componentDidMount() {
        PubSub.subscribe('franco', (_,data)=>{
            this.setState(data)
        })

    }

    render() {

        return (
            <div>
                <div className="row">
                    {
                        this.state.isFirst ? <h2>Please enter keyword and search</h2> :
                            this.state.isLoading ? <h2>Loading......</h2> :
                                this.state.err ? <h2 style={{color:'red'}}>{this.state.err}</h2> :
                        this.state.users.map((user) =>{
                            return (
                                <div key={user.id} className="card">
                                    <a rel="noreferrer" href={user.html_url} target="_blank">
                                        <img alt={'react'} src={user.avatar_url}
                                             style={{width: '100px'}}/>
                                    </a>
                                    <p className="card-text">{user.login}</p>
                                </div>
                            )
                        })

                    }
                </div>
            </div>
        );
    }
}

export default List;