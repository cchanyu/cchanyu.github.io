import React from 'react';
import '../css/ContactMe.css'

class ContactMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
        }
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }
    
    handleSubmit(event) {
    }

    render(){
        return(
            <div className="contact">
                <div className="contact--title">Contact Form</div>
                <div className="contact--email">Email: Chanyu.Choung@lc.cuny.edu</div>
                <form id="contact--form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div className="form--group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form--control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                </div>
                <div className="form--group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form--control" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                </div>
                <div className="form--group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form--control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                </div>
                <button type="submit" className="btn">Submit</button>
                </form>
            </div>
        )
    }

}

export default ContactMe;