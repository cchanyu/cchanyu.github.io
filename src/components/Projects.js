import React, { createRef } from 'react';
import '../css/Projects.css'
import ProjectPad from './ProjectPad';
import ScrollContainer from "react-indiana-drag-scroll";

class Projects extends React.Component {
    numbers = new Array(10).fill(1).map((_, index) => index + 1);
    scrollRef = createRef();
    clickHandler = () => {};
    enableKeyboardCursorToScroll = () => {
        if (this.scrollRef.current) {
            this.scrollRef.current.focus();
        }
    };

    render(){
        const { numbers, scrollRef, enableKeyboardCursorToScroll, clickHandler } = this;

        return(
            <div className="project">
                <ScrollContainer className="container">
                    <section
                        className="tiles"
                        onFocus={enableKeyboardCursorToScroll}
                        ref={scrollRef}
                    >
                        {numbers.map((e) => (
                            <ProjectPad
                                key={e}
                                content={e}
                                onClick={clickHandler}
                            />
                        ))}
                    </section>
                </ScrollContainer>
            </div>
        )
    }

}

export default Projects;