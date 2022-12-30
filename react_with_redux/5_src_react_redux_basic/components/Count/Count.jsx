import React, {Component} from 'react';


class Count extends Component {


    increment = () =>{
        const {value} = this.selectedNum
        this.props.increment(value*1)
    }

    decrement = () =>{
        const {value} = this.selectedNum
        this.props.decrement(value*1)


    }

    incrementIfOdd = () => {
        const {value} = this.selectedNum
        if (this.props.count % 2 !== 0){
            this.props.increment(value*1)

        }

    }

    incrementAsync = () =>{
        const {value} = this.selectedNum
        this.props.incrementAsync(value*1,500)
    }

    render() {
        return (
            <div>
               <h1>Current sum: {this.props.count}</h1>
               <select ref={c=>this.selectedNum = c}>
                   <option value='1'>1</option>
                   <option value='2'>2</option>
                   <option value='3'>3</option>
               </select>
                &nbsp;
                <button onClick={this.increment}>+</button>                &nbsp;

                <button onClick={this.decrement}>-</button>                &nbsp;

                <button onClick={this.incrementIfOdd}>increment when odd</button>                &nbsp;

                <button onClick={this.incrementAsync}>increment asynchronously</button>                &nbsp;

            </div>
        );
    }
}

export default Count;