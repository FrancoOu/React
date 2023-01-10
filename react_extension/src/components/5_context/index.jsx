import React, {Component} from 'react';
import './index.css'

// create context object
const MyContext = React.createContext()

class Demo extends Component {

    state = {username:'franco',age:'1'}

    render() {
        return (
            <div className='parent'>
                <h3>demo</h3>
                <h4>my name is {this.state.username}</h4>
                <MyContext.Provider value={this.state}>
                    <B/>
                </MyContext.Provider>
            </div>
        );
    }
}

class B extends Component {
    static contextType = MyContext

    render() {
        return (
            <div className='b'>
                <h3>B</h3>
                <h4>my name from Demo is {this.context.username} </h4>
                <C/>
            </div>
        );
    }
}

// class C extends Component {
//     static contextType = UserNameContext
//     render() {
//         return (
//             <div className='c'>
//                 <h3>C</h3>
//                 <h4>my name from Demo is {this.context.username} </h4>
//                 <h4>age is {this.context.age}</h4>
//
//             </div>
//         );
//     }
// }
function C(){
    return (
            <div className='c'>
                <h3>C</h3>
                <h4>my name from Demo is
                    {/*use Consumer in functional component*/}
                    <MyContext.Consumer>
                        {
                            value => {
                                return value.username
                            }
                        }
                    </MyContext.Consumer>
                </h4>
                {/*<h4>age is {this.context.age}</h4>*/}

            </div>
    )
}

export default Demo;