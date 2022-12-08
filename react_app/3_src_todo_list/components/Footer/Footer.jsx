import React, {Component} from 'react';
import './Footer.css'

class Footer extends Component {

    tickBoxChange = () => {
        return (e)=>{

            this.props.tickBoxChange(e.target.checked)
        }

    }

    render() {
        return (
            <div>
                <div className="todo-footer">
                    <label>
                        <input onChange={this.tickBoxChange()} type="checkbox" checked={this.props.doneAmount === this.props.totalAmount}/>
                    </label>
                    <span>
                             <span>Done {this.props.doneAmount}</span> / {this.props.totalAmount}
                        </span>
                    <button onClick={this.props.deleteDoneTodo} className="btn btn-danger">Delete finished tasks</button>
                </div>

            </div>
        );
    }
}

export default Footer;