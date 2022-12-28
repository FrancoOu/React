import React, {Component} from 'react';
import store from "../../redux/store";
import {createAsyncIncrementAction, createDecrementAction, createIncrementAction} from "../../redux/count_action";

class Count extends Component {


    increment = () =>{
        const {value} = this.selectedNum
        store.dispatch(createIncrementAction(value*1))

    }

    decrement = () =>{
        const {value} = this.selectedNum
        store.dispatch(createDecrementAction(value*1))

    }

    incrementIfOdd = () => {
        const {value} = this.selectedNum
        const count = store.getState()
        if (count % 2 !== 0) {
            store.dispatch(createIncrementAction(value*1))
        }
    }

    incrementAsync = () =>{
        const {value} = this.selectedNum
        // setTimeout(() => {

            store.dispatch(createAsyncIncrementAction(value*1,500))
        // },500)

    }

    // set listener for state updating and re-render the component after state update
    componentDidMount() {
        store.subscribe(()=>{
            this.setState({})
        })
    }

    render() {
        return (
            <div>
               <h1>Current sum: {store.getState()}</h1>
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