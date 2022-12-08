import React, {Component} from 'react';
import axios from "axios";

class App extends Component {

    state = {studentData:[]}

    getStudentData = () => {

        //proxy
        axios.get("http://localhost:3000/api1/students").then(
            response => {console.log(response.data)
                this.setState({studentData: response.data})
            },
            error => {console.log("error")}

        )
    }

    getCarData = () => {
        axios.get("http://localhost:3000/api2/cars").then(
            response => {console.log(response.data)
                this.setState({studentData: response.data})
            },
            error => {console.log("error")}

        )

    }
    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>click to get student data</button>
                <button onClick={this.getCarData}>click to get car data</button>

                {this.state.studentData.map((student)=>{
                    return <h1>{student.name}</h1>
                })}
            </div>
        );
    }
}

export default App;