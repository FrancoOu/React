import React, {Component} from 'react';
import PropTypes from "prop-types";
import Item from "../Item/Item";
import './List.css'
class List extends Component {

    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    render() {
        const {todos} = this.props
        return (
            <div>
                <ul className="todo-main">
                    {todos.map( todo =>{
                        return <Item key={todo.id} {...todo} deleteTodo={this.props.deleteTodo} updateTodo={this.props.updateTodo}/>
                    })
                    }

                </ul>
            </div>
        );
    }
}

export default List;