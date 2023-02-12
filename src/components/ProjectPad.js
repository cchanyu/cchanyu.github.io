import React from 'react'
import ProjectDetail from './ProjectDetail';
import '../css/Project.css';

class ProjectPad extends React.Component {
    constructor(){
        super()
        this.state={
            detail: false
        }
    }

    handleClick = () => { this.setState({detail: !this.state.detail}) }

    render(){
        const { content } = this.props;
        const { handleClick } = this;

        return(
            <div className='project--map'>
                <div className='project--cover'>
                    <img className="project--image" src={content.image} alt="content" onClick={handleClick} />
                </div>
                <div className='project--row'>
                    <div className="project--title" onClick={handleClick}>{content.name} - {content.language}</div>
                    <div className='project--desc'>{content.description}</div>
                </div>
                {this.state.detail ? <ProjectDetail toggle={handleClick} content={content} /> : null}
            </div>
        )
    }
}

export default ProjectPad;