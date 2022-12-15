import React, {Component} from 'react';
import './index.css'
class List extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <div className="row">
                    {
                        this.props.isFirst ? <h2>Please enter keyword and search</h2> :
                            this.props.isLoading ? <h2>Loading......</h2> :
                                this.props.err ? <h2 style={{color:'red'}}>{this.props.err}</h2> :
                        this.props.users.map((user) =>{
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