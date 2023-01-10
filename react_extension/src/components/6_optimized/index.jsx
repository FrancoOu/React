import React, {PureComponent} from 'react';
import './index.css'

class Parent extends PureComponent {

    state = {carName:'mercedes c63'}

    changeCarName = () =>{
        // only compare the address of the state object
        // const obj = this.state
        // obj.carName = 'mazda 3 g25'
        // this.setState(obj)
        this.setState({carName:'mazda 3 g25'})
    }

    render() {
        console.log('parent')
        return (
            <div className={'parent'}>
                <h3>I am parent</h3>
                <Child carName={'nihao'}/>
                <h3>car name is {this.state.carName}</h3>
                <button onClick={this.changeCarName}>change car name</button>
            </div>
        );
    }

    // shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
    //     console.log(this.state)
    //     console.log(nextState)
    //     return nextState.carName !== this.state.carName;
    // }
}

class Child extends PureComponent {
    render() {
        console.log('child')
        return (
            <div className={'child'}>
                <h3>I am child</h3>
                {/*<h3>{this.props.carName}</h3>*/}
            </div>
        )
    }

    // shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
    //
    //     return nextProps.carName !== this.props.carName;
    // }
}

export default Parent;