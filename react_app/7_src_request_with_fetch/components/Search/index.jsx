import React, {Component} from 'react';
import PubSub from "pubsub-js";
import axios from "axios";

class Search extends Component {

    state = {keyword: ""}

    handleInputChange = (e) => {
        // console.log(e.target.value)
        this.setState({keyword: e.target.value})
    }

    search = async () => {


        if (this.state.keyword.trim() === '') {
            alert("Empty Input!")
            return
        }
        //update state before sending request
        // this.props.updateAppState({isFirst:false,isLoading:true})
        PubSub.publish('franco', {isFirst: false, isLoading: true})

        //     axios.get('/api1/search/users?q=' + this.state.keyword).then(
        //         r => {
        //             // console.log(r.data)
        //             // update the users using the data from the server
        //             // this.props.updateAppState({isLoading:false,users:r.data.items})
        //             PubSub.publish('franco', {isLoading:false,users:r.data.items})
        //
        //         },
        //         e => PubSub.publish('franco', {isLoading:false,err:e.message})
        //
        // )
        try {
            const response = await fetch('/api1/search/users?q=' + this.state.keyword)
            const result = await response.json()
            console.log(result)
            PubSub.publish('franco', {isLoading:false,users:result.items})

        }catch (e){
            console.log(e)
            PubSub.publish('franco', {isLoading:false,err:e.message})

        }

    }

    enterKey = (e) =>{
        if(this.state.keyword.trim() === ''){
            alert("Empty Input!")
            return
        }
            console.log(e.key)
            if (e.key === 'Enter'){
                this.search()
            }

    }
    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input onKeyUp={this.enterKey} type="text" placeholder="enter the name you search" onChange={this.handleInputChange}/>&nbsp;
                        <button onClick={this.search} >Search</button>
                    </div>
                </section>
            </div>
        );
    }
}

export default Search;