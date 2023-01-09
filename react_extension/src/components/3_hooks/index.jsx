// import React from 'react';


import React, {Component, useEffect, useRef, useState} from 'react';

// class Demo extends Component {
//
//     state = {count:0}
//
//     componentDidMount() {
//         this.timer = setInterval(() =>{
//             this.setState(state => ({count:state.count+1}))
//         },1000)
//
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.timer)
//     }
//
//     unmount = ()=>{
//         this.props.root.unmount()
//     }
//
//     add = () =>{
//         this.setState(state =>({count:state.count + 1}))
//     }
//     render() {
//         return (
//             <div>
//                 <h2>sum:{this.state.count}</h2>
//                 <button onClick={this.add}>add</button>
//                 <button onClick={this.unmount}>unmount</button>
//
//             </div>
//         );
//     }
// }


function Demo(props) {

    const [count,setCount] = useState(0)
    const [name,setName] = useState('franco')
    const ref = useRef()
    useEffect(()=>{
        const timer = setInterval(() =>{
            setCount(prevCount => prevCount + 1)
        },1000)

        return ()=>{
            clearInterval(timer)
        }
    },[])


    function add(){
        setCount(prevCount => prevCount + 1)
    }

    function changeName(){
        if (name === 'franco'){

            setName('chasie')
        }
        else {
            setName('franco')
        }
    }

    function unmount(){
        props.root.unmount()
    }

    function show(){
        alert(ref.current.value)
    }
    return (
        <div>
            <h2>sum: {count}</h2>
            <h2>name: {name}</h2>
            <input type="text" ref={ref}/>
            <button onClick={add}>add</button>
            <button onClick={changeName}>change name</button>
            <button onClick={unmount}>unmount</button>
            <button onClick={show}>show data</button>
        </div>
    );
}

export default Demo;