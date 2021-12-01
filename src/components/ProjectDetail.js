import React from 'react'
import "../css/ProjectDetail.css"
import Times from '../icon/times-circle-solid.svg';

const ProjectDetail = (props) => {
    const { content, toggle } = props;
    const handleClick = () => { toggle() };
    const toURL = (props) => { window.open(props) }
    
    return(
        <div className="bkmodal" onClick={handleClick}>
            <div className="modal" onClick={handleClick}>
                <div className="modal--title text">{content.name}</div>
                <img className="modal--image" src={content.image} alt="image" />
                <div className="modal--url text" onClick={() => toURL(content.url)}>{content.url}</div>
                <div className="modal--desc text">{content.description}</div>
                <div className="modal--close">
                    <img className="times icon2" src={Times} alt="times" onClick={handleClick} />
                    <div className="text">Close</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail;