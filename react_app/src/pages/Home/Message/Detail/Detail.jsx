import React, {Component} from 'react';
const messageContent = [
    {id:'1', content:'im franco'},
    {id:'2', content:'im chasie'},
    {id:'3', content:'im fofo'},

]
class Detail extends Component {

    render() {

        //get the params from props
        // const {id,title} = this.props.match.params

        //get query params and covert it to object
        // const {search} = this.props.location
        // const {id, title} = qs.parse(search.slice(1))

        //get state params
        const {id, title} = this.props.location.state
        console.log(typeof id)
        const message = messageContent.find((message) =>{
            console.log(typeof message.id)
            return message.id === id
        })
        console.log(message)
        return (
            <ul>
                <li>ID: {id}</li>
                <li>Title: {title}</li>
                <li>Content: {message.content}</li>
            </ul>
        );
    }
}

export default Detail;