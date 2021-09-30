// Object Destructuring
import { Component } from 'react'

// This is a class based component
class Message extends Component {

    // a lifecycle method that gets called first
    // When a component class is initializing
    constructor(){
        super()
        // console.log(this.props)
        // console.log("Hey I'm in the constructor")
        // alert("ayeee we in the constructor!")
    }

    renderMessage = () => {
        if(this.props.sender){
            return `${this.props.content} sent by ${this.props.sender}`
        } else {
            return this.props.content
        }
    }

    // All class based component needs to use this render method and it has to return some JSX
    render(){
        console.log(this.props.content)

        // Conditional Rendering
        if (this.props.content) {
            return <div>{this.renderMessage()}</div>
        } else {
            return <div>It has no contents</div>
        }
    }
}

export default Message