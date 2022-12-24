import React, {Component} from 'react';
const messageContent = [
    {id:'1', content:'im franco'},
    {id:'2', content:'im chasie'},
    {id:'3', content:
            <div>
                <iframe style={{borderRadius:'12px'}}
                              src="https://open.spotify.com/embed/track/3r8RuvgbX9s7ammBn07D3W?utm_source=generator"
                              width="100%" height="380" frameBorder="0" allowFullScreen="true"
                              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title={'spotify'}></iframe>
            </div>
},

]
class Detail extends Component {

    render() {

        //get the params from props
        const {id,title} = this.props.match.params

        //get query params and covert it to object
        // const {search} = this.props.location
        // const {id, title} = qs.parse(search.slice(1))

        //get state params
        // const {id, title} = this.props.location.state
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