import React, { createRef } from 'react';
import '../css/AboutMe.css'
import ProjectPad from './ProjectPad';
import ScrollContainer from "react-indiana-drag-scroll";

class AboutMe extends React.Component {
    scrollRef = createRef();
    clickHandler = () => {};
    enableKeyboardCursorToScroll = () => {
        if (this.scrollRef.current) {
            this.scrollRef.current.focus();
        }
    };

    render(){
        const { aboutmeData } = this.props;
        const { scrollRef, enableKeyboardCursorToScroll, clickHandler } = this;

        return(
            <div className="project">
                <ScrollContainer className="container">
                    <section
                        className="tiles"
                        onFocus={enableKeyboardCursorToScroll}
                        ref={scrollRef}
                    >
                        {aboutmeData.map((aboutme) => {
                            return (
                                <div key={aboutme.id}>
                                    <ProjectPad
                                        key={aboutme.id}
                                        content={aboutme}
                                        onClick={clickHandler}
                                    />
                                    <div className="data--title text">{aboutme.name}</div>
                                </div>
                            )
                        })}
                    </section>
                </ScrollContainer>
            </div>
        )
    }

}

export default AboutMe;