import React from 'react';
import { auth } from "../firebase/firebase.config";
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import GoogleIcon from '../icon/google.svg';

function handleSignin(props) {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
        const email = result.user.email;
        localStorage.setItem("email", email);
        props.checkLogged();
    }).catch((error) => {
        console.log("error: ", error);
    });
};

function handleSignout(props) {
    const target = getAuth();
    signOut(target)
    .then((result) => {
        props.checkLogged();
        window.location = '/';
        console.log("result: ", result);
    }).catch((error) => {
        console.log("error: ", error);
    });
};

export default function Login(props) {
    return (
        <div className='project'>
            {props.isLogged ? 
            <button type="submit" className="contact--button" onClick={() => handleSignout(props)}>Sign out</button> : 
            <div className='contact--wrap'>
                <div className='contact--info'>If you want to contact me, please select a sign-in method:</div>
                <button type="submit" className="contact--button" onClick={() => handleSignin(props)}>
                    <img className="contact--icon" src={GoogleIcon} alt="." />
                    <div className="contact--text">Sign in with Google</div>
                </button>
            </div>}
        </div>
    )
}