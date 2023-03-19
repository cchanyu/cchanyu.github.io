import React, { useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import projectData from "./server/projects.json";

import Resume from './components/Resume.js';
import About from './components/About.js';
import Project from './components/Project.js';
import Contact from './components/Contact.js';
import Navbar from './components/Navbar.js';
import Login from './components/Login.js';

import './App.css'

function App() {

  const [ DB ] = useState(projectData.projects);
  const [ isLogged, setIsLogged ] = useState(localStorage.getItem("isLogged"));

  return (
    <div className="App">
      <div className="content-invis" id="content-invis" />
      <div className="content-pane">
        <Navbar className="nav" />
        <div className="nav-invis" />

        {/* React Route */}
        <Routes className="route">
          <Route path="*" element={<Navigate to ="/" />}/>
          
          <Route exact path="/" element={<About />}/>
          
          <Route path="project" element={<Project projectData={DB} />}/>
          
          <Route path="resume" element={<Resume />}/>

          <Route path="contact" element={isLogged ? <Contact /> : <Login isLogged={isLogged} setIsLogged={setIsLogged} />}/>

          <Route path="login" element={<Login isLogged={isLogged} setIsLogged={setIsLogged} />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
