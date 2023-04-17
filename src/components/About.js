import React from 'react';
import '../css/About.scss';

const About = () => {
    const about_logo='https://raw.githubusercontent.com/cchanyu/cchanyu.github.io/master/src/contents/artwork.png';

    return(
        <div className="about">
            <div className='about--content'>
                <div className='about--name'>Chanyu Choung</div>
                <div className='about--title'>Full-Stack Engineer</div>

                <div className='about--text-1'>Hello,</div>
                <div className='about--text-2'>Thank you for visiting my site.</div>
                
                <div className='about--text-1'>My name is Chanyu.</div>
                <div className='about--text-1'>A student at Lehman College.</div>
                <div className='about--text-1'>I live in a beautiful seaside suburban</div>
                <div className='about--text-2'>North of NYC called Mamaroneck.</div>
                
                <div className='about--text-1'>My current goal is to become a</div>
                <div className='about--text-1'>Software Engineer.</div>
                <div className='about--text-2'>Currently working on projects.</div>
            </div>
            <img className="about--logo" src={about_logo} alt="about--logo" />
        </div>
    )
}

export default About;