import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';

import HomeScreen from './components/HomeScreen.js';
import AboutMe from './components/AboutMe.js';
import Projects from './components/Projects.js';
import ContactMe from './components/ContactMe.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

import HomeIcon from './icon/home-solid.svg';
import AboutIcon from './icon/id-card-solid.svg';
import ProjectIcon from './icon/list-alt-solid.svg';
import ContactIcon from './icon/edit-solid.svg';
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar className="navbar" />
      <div className="invisNavbar" />

      {/* React Route */}
      <Routes className="route">
        <Route exact path="/" element={<HomeScreen />}/>

        <Route path="about" element={<AboutMe />}/>
        
        <Route path="projects" element={<Projects />}/>

        <Route path="contact" element={<ContactMe />}/>
      </Routes>

      {/* Navigation */}
      <nav className="nav">
        <Link className="link" to="/">
          <img className="homei icon" src={HomeIcon} alt="home" />
          <div className="hstext">Home</div>
        </Link>

        <Link className="link" to="/about">
          <img className="abouti icon" src={AboutIcon} alt="about" />
          <div className="hstext">About</div>
        </Link>

        <Link className="link" to="/projects">
          <img className="projecti icon" src={ProjectIcon} alt="project" />
          <div className="hstext">Project</div>
        </Link>

        <Link className="link" to="/contact">
          <img className="contacti icon" src={ContactIcon} alt="contact" />
          <div className="hstext">Contact</div>
        </Link>
      </nav>

      <Footer />
      <div className="invisFooter" />
    </div>
  );
}

export default App;
