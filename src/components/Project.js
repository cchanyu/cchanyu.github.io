import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import ProjectPad from './ProjectPad';
import ScrollContainer from "react-indiana-drag-scroll";
import '../css/Project.scss';

const Project = ({ projectData }) => {
    const scrollRef = createRef();
    const clickHandler = () => {};
    const enableKeyboardCursorToScroll = () => {
        if (this.scrollRef.current) {
            this.scrollRef.current.focus();
        }
    };
    
    return (
        <div className="project">
            <ScrollContainer className="project--container">
                <section
                    className="project--tiles"
                    onFocus={enableKeyboardCursorToScroll}
                    ref={scrollRef}
                >
                    {projectData.slice(0).reverse().map((project) => {
                        return (
                            <ProjectPad
                                className='project--pad'
                                key={project.id}
                                content={project}
                                onClick={clickHandler}
                            />
                        )
                    })}
                </section>
            </ScrollContainer>
        </div>
    )
}

Project.propTypes = {
    projectData: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Project;