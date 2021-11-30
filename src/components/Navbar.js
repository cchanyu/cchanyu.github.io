import React from 'react';
import '../css/Navbar.css'
import Wifi from '../icon/wifi-solid.svg';
import User from '../icon/user-solid.svg';
import Battery from '../icon/battery-full-solid.svg';

class Navbar extends React.Component {
    constructor(){
        super()
        this.state={}
    }

    render(){
        return(
            <div className="navbar">
                <div className="navbar--inside">
                    <div className="navbar--inside--left">
                        <img className="user" src={User} alt="user" />
                    </div>
                    <div className="navbar--inside--right">
                        <div className="clock">
                            {new Date().toLocaleString("en-US", {hour: '2-digit', hour12: true, minute: '2-digit', timeZone: "America/New_York"})}
                        </div>
                        <img className="wifi" src={Wifi} alt="wifi" />
                        <img className="battery" src={Battery} alt="battery" />
                    </div>
                </div>
            </div>
        )
    }

}

export default Navbar;