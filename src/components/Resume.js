import React, { useState } from 'react';
import '../css/Resume.css';

const Resume = () => {
    const [ showResume, setShowResume ] = useState(false);
    const viewResume = (e) => {
        setShowResume(true)
    }
    return(
        <>
            {showResume ? <ResumeHolder /> : <ViewButton viewResume={viewResume} /> }
        </>
    )
}

function ResumeHolder() {
    const resume = "https://raw.githubusercontent.com/cchanyu/cchanyu.github.io/master/src/contents/Resume.jpg";
    return (
        <div className="resume">
            <img className="resume-pane" src={resume} alt="resume" />
        </div>
    )
}

function ViewButton(props) { 
    return (
    <div className='about'>
        <button type="submit" className="contact--button" onClick={() => props.viewResume()}>Resume</button> 
    </div>
    )
}

export default Resume;