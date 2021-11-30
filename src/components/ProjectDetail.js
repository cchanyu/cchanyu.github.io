import React from 'react'
import "../css/ProjectDetail.css"
import Times from '../icon/times-circle-solid.svg';

class ProjectDetail extends React.Component {
    handleClick = () => {
        this.props.toggle();
    };

    render(){
        const { content } = this.props;
        const { handleClick } = this;

        return(
            <div className="modal" onClick={handleClick}>
                <div className="modal--title text">{content.name}</div>
                <img className="modal--image" src={content.image} alt="image" />
                <div className="modal--desc text">{content.description}</div>
                <div className="modal--close">
                    <img className="times icon2" src={Times} alt="times" onClick={handleClick} />
                    <div className="text">Close</div>
                </div>
            </div>
        )
    }
}

export default ProjectDetail;