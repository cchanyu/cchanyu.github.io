import React, { useState } from 'react'
import ProjectDetail from './ProjectDetail';
import '../css/Project.css';

const ProjectPad = ({content}) => {
    const [ detail, setDetail ] = useState(false);
    const handleClick = () => { setDetail(!detail) }

    return(
        <div className='project--map'>
            <div className='project--cover'>
                <img className="project--image" src={content.image} alt="content" onClick={handleClick} />
            </div>
            <div className='project--row'>
                <div className="project--title" onClick={handleClick}>{content.name} - {content.language}</div>
                <div className='project--desc'>{content.description}</div>
            </div>
            {detail ? <ProjectDetail toggle={handleClick} content={content} /> : null}
        </div>
    )
}

export default ProjectPad;