//  import connect
import {connect} from 'react-redux';
import {createAsyncIncrementAction, createDecrementAction, createIncrementAction} from "../../redux/actions/count";
import React, {Component} from "react";


// define UI component
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
                <h1>Current number of ppl: {this.props.people.length}</h1>
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

// the return value(object) will be passed to UI component as state in props
const mapStateToProps = state => ({count:state.count, people:state.people})

// the return value and will be passed to UI component as action in props
// const mapDispatchToProps = dispatch =>(
//     {
//         increment:(data)=>dispatch(createIncrementAction(data)),
//         decrement:(data)=>dispatch(createDecrementAction(data)),
//         incrementAsync:(data,time)=>dispatch(createAsyncIncrementAction(data,time))
//         }
// )


const mapDispatchToProps = {

    increment:createIncrementAction,
    decrement:createDecrementAction,
    incrementAsync:createAsyncIncrementAction

}
// create a container
export default connect(mapStateToProps,mapDispatchToProps)(Count)
