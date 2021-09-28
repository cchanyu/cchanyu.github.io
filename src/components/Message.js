import React from 'react'

// This is a class based component
class Message extends React.Component {

    // a lifecycle method that gets called first
    // When a component class is initializing
    constructor(){
        super()
        console.log("Hey I'm in the constructor")
        // alert("ayeee we in the constructor!")
    }

    // All class based component needs to use this render method and it has to return some JSX
    render(){
        return(
            <div>
                This is a class-based components
            </div>
        )
    }
}

export default Message