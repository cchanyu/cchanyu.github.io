import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

class Navbar extends React.Component {
    hideContent = () => { document.getElementById("content-invis").style.display = 'none'; }
    returnContent = () => { document.getElementById("content-invis").style.display = 'block'; }
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
                    <NavLink className="navbar--link" exact to="/" activeClassName="active" onClick={this.returnContent}>
                        <div className="navbar--text">About</div>
                    </NavLink>

                    <NavLink className="navbar--link" to="/project" activeClassName="active" onClick={this.hideContent}>
                        <div className="navbar--text">Project</div>
                    </NavLink>

                    <NavLink className="navbar--link" to="/login" activeClassName="active" onClick={this.hideContent}>
                        <img className="navbar--logo" src={navbar_logo} alt="navbar--logo" />
                    </NavLink>
                    
                    <NavLink className="navbar--link" to="/resume" activeClassName="active" onClick={this.hideContent}>
                        <div className="navbar--text">Resume</div>
                    </NavLink>

                    <NavLink className="navbar--link" to="/contact" activeClassName="active" onClick={this.hideContent}>
                        <div className="navbar--text">Contact</div>
                    </NavLink>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Navbar;