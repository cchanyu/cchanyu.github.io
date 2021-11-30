import React from 'react'
import "../css/ProjectPad.css"

class ProjectPad extends React.Component {
    render(){
        const { content } = this.props;

        return(
            <div
                className= "projectPad"
                content={content}
            >
                Number: {content}
            </div>
        )
    }
}

export default ProjectPad;