import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

class Navbar extends React.Component {
    constructor(){
        super()
        this.state={
            status: ''
        }
    }

    render(){
        const navbar_logo = "https://raw.githubusercontent.com/cchanyu/cchanyu.github.io/master/src/contents/01_intro.jpg";
        return (
            <div className="nav">
                <div className="navbar">
                    {/* Navigation */}
                    <nav className="navbar--inside">
                    <NavLink className="navbar--link" exact to="/" activeClassName="active">
                        <div className="navbar--text">About</div>
                    </NavLink>

                    <NavLink className="navbar--link" to="/project" activeClassName="active">
                        <div className="navbar--text">Project</div>
                    </NavLink>

                    <img className="navbar--logo" src={navbar_logo} alt="navbar--logo" />
                    
                    <NavLink className="navbar--link" to="/resume" activeClassName="active">
                        <div className="navbar--text">Resume</div>
                    </NavLink>

                    <NavLink className="navbar--link" to="/contact" activeClassName="active">
                        <div className="navbar--text">Contact</div>
                    </NavLink>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Navbar;