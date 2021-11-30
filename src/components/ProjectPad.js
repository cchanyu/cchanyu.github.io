import React from 'react'
import "../css/ProjectPad.css"

class ProjectPad extends React.Component {
    render(){
        const { content } = this.props;

        return(
            <div key={content.id} className= "projectPad">
                <div className="Pad--id">Number: {content.id}</div>
                <div className="Pad--Name">Name: {content.name}</div>
            </div>
        )
    }
}

export default ProjectPad;