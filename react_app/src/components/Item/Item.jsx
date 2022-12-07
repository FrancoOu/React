import React, {Component} from 'react';
import './Item.css'
class Item extends Component {
    state = {mouse: false}

    handleMouse = (flag) =>{
        return () =>{
            this.setState({mouse: flag})
        }
    }

    update = ()=> {
        // console.log('update')
        return (event) =>{

            this.props.updateTodo(this.props.id, event.target.checked)
        }
    }


    render() {
        return (
            <div>
                <li style={{backgroundColor: this.state.mouse ? '#ddd': 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                    <label>
                        <input type="checkbox" checked={this.props.done} onChange={this.update()}/>
                        <span>{this.props.name}</span>
                    </label>
                    <button onClick={this.props.deleteTodo(this.props.id)} className="btn btn-danger" style={{display: this.state.mouse? 'block':'none'}}>删除</button>
                </li>
            </div>
        );
    }
}

export default Item;