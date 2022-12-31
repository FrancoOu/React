import React, {Component} from 'react';
import {nanoid} from "nanoid";
import {connect} from "react-redux";
import {addPerson} from "../../redux/actions/person";

class Person extends Component {


    state = {
        age:'',
        name:''
    }

    handleNameChange = (e) =>{

        this.setState({name:e.target.value})
    }

    handleAgeChange = (e) =>{
        this.setState({age:e.target.value})

    }

    addPerson = () =>{

        const {name,age} = this.state
        if (!name || !age){
            alert('Empty Input!')

        }else {
            const person = {id:nanoid(),name,age}
            this.props.addPerson(person)
            this.setState({age:'',name:''})
        }
    }


    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Person</h1>
                <h2>Current Sum: {this.props.count}</h2>
                <input onChange={this.handleNameChange} type="text" placeholder={'name'} value={this.state.name}/>
                <input onChange={this.handleAgeChange} type="text" placeholder={'age'} value={this.state.age}/>
                <button onClick={this.addPerson}>add</button>
                <ul>

                        {
                            this.props.people.map( (p) =>{
                                return <li key={p.id}>{p.name}  {p.age}</li>
                        })
                        }

                </ul>

            </div>
        );
    }
}

const mapStateToProps = state => ({people:state.people, count:state.count})

const mapDispatchToProps = {

    addPerson:addPerson

}
// create a container
export default connect(mapStateToProps,mapDispatchToProps)(Person)