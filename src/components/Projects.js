import React from 'react';
import '../css/Projects.css'
import ProjectPad from './ProjectPad';

class Projects extends React.Component {
    board = ["1", "2", "3", "4"];

    render(){
        const { board } = this;

        return(
            <div className="project">
                {board.map(function(board, i){
                    return(
                        <ProjectPad
                            key={i}
                        />
                    )
                })}
            </div>
        )
    }

}

export default Projects;