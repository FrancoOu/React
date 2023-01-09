import React, {Component} from 'react';

class Demo extends Component {

    state = {count:0}

    add = () =>{

        // this.setState({count:this.state.count+1}, ()=>{
        //     const a= this.state.count
        // })

        // pass function
        this.setState((state)=>{
            return {count: state.count+1}
        })
    }

    render() {
        return (
            <div>
                <h1>sum: {this.state.count}</h1>
                <button onClick={this.add}>add</button>
            </div>
        );
    }
}

export default Demo;