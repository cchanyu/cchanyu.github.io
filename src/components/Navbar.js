import React from 'react';
import '../css/Navbar.css'

class Navbar extends React.Component {
    constructor(){
        super()
        this.state={}
    }

    render(){
        return(
            <div className="navbar">
                <div className="navbar--inside">
                    <div className="user"></div>
                    <div className="clock"></div>
                    <div className="wifi"></div>
                    <div className="battery"></div>
                    Navbar
                </div>
            </div>
        )
    }

}

export default Navbar;