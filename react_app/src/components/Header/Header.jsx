import React, {Component} from 'react';
import {nanoid} from "nanoid";
import PropTypes from 'prop-types'
import './Header.css'
class Header extends Component {

    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    handleKeyUp = (e) =>{
        if(e.keyCode !== 13 ) return
        if(e.target.value.trim() === ''){
            alert("Empty Input!")
            return
        }
        else {
            console.log(e.target.value)
            const todoObj = {id: nanoid() ,name: e.target.value, done: false}
            this.props.addTodo(todoObj)
        }
        e.target.value = ''
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="Enter your task here"/>
            </div>

        );
    }
}

export default Header;