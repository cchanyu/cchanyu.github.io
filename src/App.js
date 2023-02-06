import React, { Component } from "react";
import { Routes, Route } from 'react-router-dom';
import projectData from "./server/projects.json";

import Resume from './components/Resume.js';
import About from './components/About.js';
import Project from './components/Project.js';
import Contact from './components/Contact.js';
import Navbar from './components/Navbar.js';
import Login from './components/Login.js';

import './App.css'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      projectData: projectData.projects,
      isLogged: false
    }
    this.checkLogged = this.checkLogged.bind(this)
  }

  checkLogged() {
    <>
      { this.isLogged ? 
      this.setState({ isLogged: false }) : 
      this.setState({ isLogged: true })}
    </>
  }

  render(){
    const { projectData, isLogged } = this.state;
    const { checkLogged } = this;

    return (
      <div className="App">
        <div className="content-invis" id="content-invis" />
        <div className="content-pane">
          <Navbar className="nav" />
          <div className="nav-invis" />

          {/* React Route */}
          <Routes className="route">
          <Route exact path="/" element={<About />}/>
          
          <Route path="project" element={<Project projectData={projectData} />}/>
          
          <Route path="resume" element={<Resume />}/>

          <Route path="contact" element={isLogged ? <Contact /> : <Login isLogged={isLogged} checkLogged={checkLogged} />}/>

          <Route path="login" element={<Login isLogged={isLogged} checkLogged={checkLogged} />}/>
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
