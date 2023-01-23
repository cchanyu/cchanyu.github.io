import React from 'react';
import '../css/Resume.css';

const Resume = () => {
    const resume = "https://raw.githubusercontent.com/cchanyu/cchanyu.github.io/master/src/contents/Resume.jpg";
    
    return(
        <div className="resume">
            <img className="resume-pane" src={resume} alt="resume" />
        </div>
    )
}

export default Resume;