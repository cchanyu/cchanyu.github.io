import React from 'react';
import '../css/AboutMe.css'
import ProjectPad from './ProjectPad';

class AboutMe extends React.Component {
    board = ["1", "2", "3", "4"];

    render(){
        const { board } = this;

        return(
            <div className="about">
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

export default AboutMe;