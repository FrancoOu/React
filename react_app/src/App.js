import React, {Component} from "react";
import './App.css'
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";


//Create component
export default class App extends Component {

    state = {
        todos: [
            {id: '1', name: 'eat', done: true},
            {id: '2', name: 'sleep', done: false},
            {id: '3', name: 'coding', done: true}
        ]
    }
    addTodo = (todo) => {
        this.setState({todos: [todo, ...this.state.todos]})
    }

    deleteTodo = (id) => {
        return ()=> {
            if (window.confirm("delete?")) {
                const {todos} = this.state
                const newTodos = todos.filter((todo) =>
                    todo.id !== id
                )
                console.log(newTodos)
                this.setState({todos: newTodos})
            }
        }
    }

    updateTodo = (id, done) => {

        const {todos} = this.state
        const newTodos = todos.map((todo) => {
            if (todo.id === id) return {...todo, done}
            else return todo
        })
        this.setState({todos: newTodos})


    }

    deleteDoneTodo = () => {
        if(window.confirm("delete all finished tasks?")) {
            const {todos} = this.state
            // console.log(todos)
            const newTodos = todos.filter((todo) => {
                    return todo.done !== true
                }
            )
            console.log(newTodos)
            this.setState({todos: newTodos})
        }
    }

    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    {/*pass this.addTodo() to Header component as a prop so that in Header component we can add a new
                    to-do to this.state.todos*/}
                    <Header addTodo={this.addTodo}/>
                    {/*same as the previous callback addTodo.
                    here we pass this.deleteTodo to List component and then in List component we pass it to the Item
                    component, so that we can delete in Item component*/}
                    <List todos={this.state.todos} deleteTodo={this.deleteTodo} updateTodo={1}/>
                    <Footer deleteDoneTodo={this.deleteDoneTodo}/>
                </div>
            </div>
        );
    }

}

