import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.scss';

const Navbar = () => {
    const hideContent = () => { document.getElementById("content-invis").style.display = 'none'; }
    const returnContent = () => { document.getElementById("content-invis").style.display = 'block'; }
    const navbar_logo = "https://raw.githubusercontent.com/cchanyu/cchanyu.github.io/master/src/contents/01_intro.jpg";

    return (
        <div className="nav">
            <div className="navbar">
                {/* Navigation */}
                <nav className="navbar--inside">
                <NavLink className="navbar--link" exact="true" to="/" activeclassname="active" onClick={returnContent}>
                    <div className="navbar--text">About</div>
                </NavLink>

                <NavLink className="navbar--link" to="/project" activeclassname="active" onClick={hideContent}>
                    <div className="navbar--text">Project</div>
                </NavLink>

                <NavLink className="navbar--link" to="/login" activeclassname="active" onClick={hideContent}>
                    <img className="navbar--logo" src={navbar_logo} alt="navbar--logo" />
                </NavLink>
                
                <NavLink className="navbar--link" to="/resume" activeclassname="active" onClick={hideContent}>
                    <div className="navbar--text">Resume</div>
                </NavLink>

                <NavLink className="navbar--link" to="/contact" activeclassname="active" onClick={hideContent}>
                    <div className="navbar--text">Contact</div>
                </NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;