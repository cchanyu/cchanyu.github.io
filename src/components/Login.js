import React from 'react';
import { auth } from "../firebase/firebase.config";
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function handleSignin(props) {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        const email = user.email;
        const name = user.displayName;
        const profilepic = user.photoURL;
        console.log("token: ", token);
        console.log("user: ", user);
        console.log("email: ", email);
        console.log("name: ", name);
        
        localStorage.setItem("user", user);
        localStorage.setItem("email", email);
        
        props.checkLogged();
        console.log("result: ", result);
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("error: ", error);
    });
};

function handleSignout(props) {
    const target = getAuth();
    signOut(target)
    .then((result) => {
        props.checkLogged();
        window.location.reload();
        console.log("result: ", result);
    }).catch((error) => {
        console.log("error: ", error);
    });
};

export default function Login(props) {
    return (
        <div className='about'>
            {props.isLogged ? 
            <button type="submit" className="contact--button" onClick={() => handleSignout(props)}>Logout</button> : 
            <button type="submit" className="contact--button" onClick={() => handleSignin(props)}>Login</button>}
        </div>
    )
}