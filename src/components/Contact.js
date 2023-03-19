import React, { useState } from 'react';
import { firestore } from '../firebase/firebase.config';
import '../css/Contact.css';

const Contact = () => {

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ success, setSuccess ] = useState({});

    const handleSubmit = async(e) => {
        if (name === '' || email === '' || message === '') {
            alert("Please fill out all the fields.");
            e.preventDefault();
        } else {
            postData();
            e.preventDefault();

            // CC: displays a successfully submitted message
            setSuccess({display: "block"})
            console.log("Message sent: ", name, email, message)

            // CC: field value reset
            resetData();
            setTimeout(function(){
                setSuccess({})
            }, 3000);
        }
    }

    function resetData() {
        setName('');
        setEmail('');
        setMessage('');
    }

    function postData() {
        const senderid = localStorage.getItem("email");
        const time = Date.now()
        firestore.collection("contact").add({
          Name: name,
          Email: email,
          Message: message,
          SenderID: senderid,
          PostedOn: new Intl.DateTimeFormat('en-US', {
          year: 'numeric', month: 'long', 
          day: '2-digit', hour: '2-digit',
          minute: '2-digit'}).format(time),
        })
    }

    return(
        <div className="contact">
            <div className="contact--title">Contact Form</div>
            <div className="contact--email">Email: Chanyu.Choung@lc.cuny.edu</div>
            <div className="contact--link">Linkedin: https://www.linkedin.com/in/chanyu-c/</div>
            <form id="contact--form" className="contact--form">
                <div className="contact--group">
                    <label className="contact--name" htmlFor="name">Name</label>
                    <input type="text" className="contact--input" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="contact--group">
                    <label className="contact--name" htmlFor="email">Email</label>
                    <input type="email" className="contact--input" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="contact--group">
                    <label className="contact--name" htmlFor="message">Message</label>
                    <textarea className="contact--input" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button type="submit" className="contact--button-2" onClick={handleSubmit}>Submit</button>
                <div className='contact--success' style={success}>Successfully Submitted!</div>
            </form>
        </div>
    )
}

export default Contact;