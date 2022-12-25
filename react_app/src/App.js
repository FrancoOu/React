import React, {Component} from 'react';
import {Button, DatePicker, Space} from "antd";
import {LinkedinOutlined} from '@ant-design/icons'
class App extends Component {

    state = {
        spin: false,
        dateString:""
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({spin: true})
        },1000)
    }

    dateChange = (date,dateString) => {

            console.log(dateString, date.$d)
        this.setState({dateString: date.$d.toString()})

    }

    render() {
        return (
           <Space wrap direction={"vertical"}>
               <DatePicker onChange={this.dateChange} />
               <Button type='primary'>傻逼</Button>
               <Button type='link'>click me</Button>
               <LinkedinOutlined spin={this.state.spin} />
               <p>{this.state.dateString}</p>
           </Space>

        )
    }
}

export default App;