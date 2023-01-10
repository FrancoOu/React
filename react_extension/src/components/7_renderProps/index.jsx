import React, {Component} from 'react';
import './index.css'

import C from '../1_setState'

export default class Parent extends Component {
    render() {
        return (
            <div className="parent">
                <h3>我是Parent组件</h3>
                <A render={(name)=><C name={name}/>}/>
            </div>
        )
    }
}

class A extends Component {
    state = {name:'tom'}
    render() {
        console.log(this.props);
        const {name} = this.state
        return (
            <div className="a">
                <h3>我是A组件</h3>
                {this.props.render(name)}
            </div>
        )
    }
}

class B extends Component {
    render() {
        console.log('B--render');
        return (
            <div className="b">
                <h3>我是B组件,{this.props.name}</h3>
            </div>
        )
    }
}

// class Parent extends Component {
//     render() {
//         return (
//             <div className={'parent'}>
//                 <h3>I am parent</h3>
//                 <A>
//                   <B/>
//                 </A>
//             </div>
//         );
//     }
// }
//
// class A extends Component {
//     render() {
//         return (
//             <div className={'a'}>
//                 <h3>I am A {this.props.children}</h3>
//                 {/*<B/>*/}
//             </div>
//         );
//     }
// }
//
// class B extends Component {
//     render() {
//         return (
//             <div className={'b'}>
//                 <h3>I am B</h3>
//             </div>
//         );
//     }
// }
//
// export default Parent;