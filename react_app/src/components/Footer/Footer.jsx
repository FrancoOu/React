import React, {Component} from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="todo-footer">
                    <label>
                        <input type="checkbox"/>
                    </label>
                    <span>
                             <span>Done 0</span> / 2
                        </span>
                    <button onClick={this.props.deleteDoneTodo} className="btn btn-danger">Delete finished tasks</button>
                </div>

            </div>
        );
    }
}

export default Footer;