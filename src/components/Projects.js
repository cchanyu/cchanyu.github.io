import React, { createRef } from 'react';
import '../css/Projects.css'
import ProjectPad from './ProjectPad';
import ScrollContainer from "react-indiana-drag-scroll";

class Projects extends React.Component {
    scrollRef = createRef();
    clickHandler = () => {};
    enableKeyboardCursorToScroll = () => {
        if (this.scrollRef.current) {
            this.scrollRef.current.focus();
        }
    };

    render(){
        const { projectData } = this.props;
        const { scrollRef, enableKeyboardCursorToScroll, clickHandler } = this;

        return(
            <div className="project">
                <ScrollContainer className="container">
                    <section
                        className="tiles"
                        onFocus={enableKeyboardCursorToScroll}
                        ref={scrollRef}
                    >
                        {projectData.slice(0).reverse().map((project) => {
                            return (
                                <div key={project.id}>
                                    <ProjectPad
                                        key={project.id}
                                        content={project}
                                        onClick={clickHandler}
                                    />
                                    <div className="data--title">{project.name}</div>
                                </div>
                            )
                        })}
                    </section>
                </ScrollContainer>
            </div>
        )
    }

}

export default Projects;