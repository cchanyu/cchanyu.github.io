import React, { useState } from 'react';
import '../css/Resume.scss';

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
    <div className='project'>
        <div className='contact--info'>If you want to see my resume, please click the button:</div>
        <button type="submit" className="contact--button" onClick={() => props.viewResume()}>View Resume</button> 
    </div>
    )
}

export default Resume;